// Run with: npm run check:ui
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/', pretendToBeVisual: true,
});
for (const key of ['window', 'document', 'HTMLElement', 'SVGElement', 'Image', 'Element', 'Node', 'MutationObserver', 'getComputedStyle']) {
  global[key] = key === 'getComputedStyle' ? dom.window.getComputedStyle.bind(dom.window) : dom.window[key];
}
Object.defineProperty(global, 'navigator', { value: dom.window.navigator, configurable: true });
global.requestAnimationFrame = dom.window.requestAnimationFrame.bind(dom.window);
global.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(dom.window);
global.IS_REACT_ACT_ENVIRONMENT = true;
window.scrollTo = () => {};
window.matchMedia = query => {
  const minimum = query.match(/min-width:\s*([\d.]+)(em|px)/);
  const maximum = query.match(/max-width:\s*([\d.]+)(em|px)/);
  const pixels = match => Number(match[1]) * (match[2] === 'em' ? 16 : 1);
  const matches = query.includes('prefers-reduced-motion') ||
    ((!minimum || window.innerWidth >= pixels(minimum)) && (!maximum || window.innerWidth <= pixels(maximum)));
  return { matches, media: query, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} };
};

// Load the project's TSX directly using its existing TypeScript dependency.
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (module, filename) => {
    const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
      fileName: filename,
    });
    module._compile(outputText, filename);
  };
}

const React = require('react');
const { ChakraProvider } = require('@chakra-ui/react');
const { render, screen, fireEvent, waitFor, cleanup, within } = require('@testing-library/react');
const App = require('../src/App.tsx').default;

async function check(width) {
  window.innerWidth = width;
  window.history.replaceState(null, '', '/');
  render(React.createElement(ChakraProvider, null, React.createElement(App)));
  assert.match(screen.getByRole('heading', { level: 1 }).textContent, /Back-endDeveloper/);
  assert.equal(document.documentElement.lang, 'pt-BR');
  assert.equal(document.querySelectorAll('article').length, 4);
  const grid = document.querySelector('article').parentElement;
  await waitFor(() => assert.equal(getComputedStyle(grid).gridTemplateColumns,
    width < 768 ? 'minmax(0, 1fr)' : 'repeat(2, minmax(0, 1fr))'));

  const first = document.getElementById('project-trigger-2');
  const second = document.getElementById('project-trigger-3');
  for (const trigger of [first, second]) {
    assert.ok(document.getElementById(trigger.getAttribute('aria-controls')));
  }
  fireEvent.click(first);
  assert.equal(first.getAttribute('aria-expanded'), 'true');
  const panel = document.getElementById('project-details-2');
  await waitFor(() => assert.notEqual(getComputedStyle(panel).display, 'none'));
  assert.ok(within(panel).getByRole('heading', { name: '02 / Implementação' }));
  assert.match(panel.textContent, /Flyway/);
  assert.equal(window.location.pathname, '/');
  assert.equal(within(panel).queryByRole('link', { name: 'Jogar demo' }), null);

  fireEvent.click(second);
  assert.equal(first.getAttribute('aria-expanded'), 'false');
  assert.equal(second.getAttribute('aria-expanded'), 'true');
  assert.equal(document.querySelectorAll('[aria-expanded="true"][id^="project-trigger-"]').length, 1);
  fireEvent.click(second);
  assert.equal(second.getAttribute('aria-expanded'), 'false');

  fireEvent.click(first);
  fireEvent.keyDown(panel, { key: 'Escape' });
  assert.equal(first.getAttribute('aria-expanded'), 'false');
  assert.equal(document.activeElement, first);
  fireEvent.click(first);
  fireEvent.click(within(panel).getByRole('button', { name: 'Recolher detalhes' }));
  assert.equal(first.getAttribute('aria-expanded'), 'false');
  assert.equal(document.activeElement, first);

  if (width < 768) {
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }));
    const navigation = screen.getByRole('navigation', { name: 'Navegação mobile' });
    const contact = within(navigation).getByRole('link', { name: 'Contato' });
    assert.equal(contact.getAttribute('href'), '#contact');
    fireEvent.click(contact);
    assert.equal(screen.queryByRole('navigation', { name: 'Navegação mobile' }), null);
  }

  fireEvent.click(screen.getByRole('button', { name: 'Switch to English' }));
  assert.equal(document.documentElement.lang, 'en');
  assert.ok(screen.getByRole('heading', { name: 'Selected projects' }));
  fireEvent.click(document.getElementById('project-trigger-1'));
  const gamePanel = document.getElementById('project-details-1');
  await waitFor(() => assert.ok(within(gamePanel).getByRole('link', { name: 'Play demo' })));
  assert.ok(within(gamePanel).getByRole('heading', { name: '03 / Challenges' }));
  assert.equal(within(gamePanel).getByRole('link', { name: 'Play demo' }).getAttribute('target'), '_blank');
  assert.equal(document.querySelector('a[href="#"]'), null);
  cleanup();
  console.log(`OK: ${width}px — responsive grid, details, keyboard, menu and translations`);
}

(async () => {
  for (const width of [320, 375, 768, 1440]) await check(width);
  window.history.replaceState(null, '', '/project/2');
  render(React.createElement(ChakraProvider, null, React.createElement(App)));
  await waitFor(() => assert.equal(window.location.pathname + window.location.hash, '/#projects'));
  cleanup();
  dom.window.close();
  console.log('OK: legacy project URLs redirect to the portfolio');
})().catch(error => { console.error(error); dom.window.close(); process.exitCode = 1; });
