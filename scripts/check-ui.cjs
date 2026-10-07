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
  assert.equal(document.querySelectorAll('#projects article').length, 2);
  const grid = document.querySelector('#projects article').parentElement;
  await waitFor(() => assert.equal(getComputedStyle(grid).gridTemplateColumns,
    width < 768 ? 'minmax(0, 1fr)' : 'repeat(2, minmax(0, 1fr))'));

  const experience = document.getElementById('experience');
  assert.equal(experience.querySelectorAll('article').length, 4);
  const kidsTrigger = document.getElementById('kidsbanner-trigger');
  const kidsPanel = document.getElementById('kidsbanner-details');
  assert.match(kidsTrigger.closest('article').textContent, /Mai 2022 — Nov 2022/);
  assert.match(kidsTrigger.closest('article').textContent, /Canadá · remoto/);
  fireEvent.click(kidsTrigger);
  assert.equal(kidsTrigger.getAttribute('aria-expanded'), 'true');
  await waitFor(() => assert.ok(within(kidsPanel).getByRole('heading', { name: 'Colaboração internacional' })));
  assert.match(kidsPanel.textContent, /No lançamento, o jogo obteve nota 5,0/);
  const gameLink = within(kidsPanel).getByRole('link', { name: 'Ver na Google Play' });
  assert.equal(gameLink.getAttribute('href'), 'https://play.google.com/store/apps/details?id=ca.kidsbanner.NordicaVillage');
  assert.equal(gameLink.getAttribute('target'), '_blank');
  fireEvent.keyDown(kidsPanel, { key: 'Escape' });
  assert.equal(kidsTrigger.getAttribute('aria-expanded'), 'false');
  assert.equal(document.activeElement, kidsTrigger);
  const zemaTrigger = document.getElementById('zema-trigger');
  const zemaPanel = document.getElementById('zema-details');
  assert.match(zemaTrigger.closest('article').textContent, /Jan 2024 — Jun 2025/);
  assert.match(zemaTrigger.closest('article').textContent, /Via Lighthouse/);
  fireEvent.click(zemaTrigger);
  assert.equal(zemaTrigger.getAttribute('aria-expanded'), 'true');
  await waitFor(() => assert.ok(within(zemaPanel).getByRole('heading', { name: 'Backend e integrações' })));
  assert.match(zemaPanel.textContent, /Google Routes API/);
  assert.match(zemaPanel.textContent, /SQL Server/);
  fireEvent.keyDown(zemaPanel, { key: 'Escape' });
  assert.equal(zemaTrigger.getAttribute('aria-expanded'), 'false');
  assert.equal(document.activeElement, zemaTrigger);
  assert.match(experience.textContent, /Lighthouse/);
  assert.match(experience.textContent, /Jul 2023 — Nov 2025/);
  const lighthouseTrigger = document.getElementById('lighthouse-trigger');
  const lighthousePanel = document.getElementById('lighthouse-details');
  fireEvent.click(lighthouseTrigger);
  assert.equal(lighthouseTrigger.getAttribute('aria-expanded'), 'true');
  await waitFor(() => assert.ok(within(lighthousePanel).getByRole('heading', { name: 'Desenvolvedor back-end Node.js' })));
  assert.equal(lighthousePanel.querySelectorAll('h4').length, 3);
  assert.match(lighthousePanel.textContent, /redução de 50%/);
  assert.match(lighthousePanel.textContent, /ZEMA/);
  fireEvent.keyDown(lighthousePanel, { key: 'Escape' });
  assert.equal(lighthouseTrigger.getAttribute('aria-expanded'), 'false');
  assert.equal(document.activeElement, lighthouseTrigger);
  assert.equal(experience.nextElementSibling.id, 'projects');
  assert.ok(within(experience).getByRole('img', { name: 'Casas Bahia' }));
  assert.match(experience.textContent, /Jan 2026 — presente/);
  const experienceTrigger = document.getElementById('experience-trigger');
  const experiencePanel = document.getElementById('experience-details');
  assert.equal(experienceTrigger.getAttribute('aria-expanded'), 'false');
  fireEvent.click(experienceTrigger);
  assert.equal(experienceTrigger.getAttribute('aria-expanded'), 'true');
  await waitFor(() => assert.ok(within(experiencePanel).getByRole('heading', { name: 'Produção e observabilidade' })));
  assert.match(experiencePanel.textContent, /health checks, timeouts, Redis, Kafka/);
  fireEvent.keyDown(experiencePanel, { key: 'Escape' });
  assert.equal(experienceTrigger.getAttribute('aria-expanded'), 'false');
  assert.equal(document.activeElement, experienceTrigger);
  fireEvent.click(experienceTrigger);
  fireEvent.click(within(experiencePanel).getByRole('button', { name: 'Recolher detalhes' }));
  assert.equal(experienceTrigger.getAttribute('aria-expanded'), 'false');

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
    assert.equal(within(navigation).getByRole('link', { name: 'Experiência' }).getAttribute('href'), '#experience');
    const contact = within(navigation).getByRole('link', { name: 'Contato' });
    assert.equal(contact.getAttribute('href'), '#contact');
    fireEvent.click(contact);
    assert.equal(screen.queryByRole('navigation', { name: 'Navegação mobile' }), null);
  }

  fireEvent.click(screen.getByRole('button', { name: 'Switch to English' }));
  assert.equal(document.documentElement.lang, 'en');
  assert.ok(screen.getByRole('heading', { name: 'Selected projects' }));
  assert.ok(screen.getByRole('heading', { name: 'Professional experience' }));
  fireEvent.click(kidsTrigger);
  await waitFor(() => assert.ok(within(kidsPanel).getByRole('heading', { name: 'International collaboration' })));
  assert.ok(within(kidsPanel).getByRole('link', { name: 'View on Google Play' }));
  fireEvent.click(within(kidsPanel).getByRole('button', { name: 'Hide details' }));
  assert.equal(kidsTrigger.getAttribute('aria-expanded'), 'false');
  fireEvent.click(zemaTrigger);
  await waitFor(() => assert.ok(within(zemaPanel).getByRole('heading', { name: 'Quality and delivery' })));
  fireEvent.click(within(zemaPanel).getByRole('button', { name: 'Hide details' }));
  assert.equal(zemaTrigger.getAttribute('aria-expanded'), 'false');
  fireEvent.click(lighthouseTrigger);
  await waitFor(() => assert.ok(within(lighthousePanel).getByRole('heading', { name: 'Back-end Development Intern' })));
  fireEvent.click(within(lighthousePanel).getByRole('button', { name: 'Hide details' }));
  assert.equal(lighthouseTrigger.getAttribute('aria-expanded'), 'false');
  fireEvent.click(experienceTrigger);
  await waitFor(() => assert.ok(within(experiencePanel).getByRole('heading', { name: 'Collaboration and technical support' })));
  assert.match(experience.textContent, /Jan 2026 — present/);
  fireEvent.click(experienceTrigger);
  fireEvent.click(second);
  const secondPanel = document.getElementById('project-details-3');
  await waitFor(() => assert.ok(within(secondPanel).getByRole('link', { name: 'View repository' })));
  assert.ok(within(secondPanel).getByRole('heading', { name: '03 / Challenges' }));
  assert.equal(within(secondPanel).getByRole('link', { name: 'View repository' }).getAttribute('target'), '_blank');
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
