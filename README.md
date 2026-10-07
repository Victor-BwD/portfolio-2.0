# Victor Dornelles · Portfólio

Portfólio profissional de **Victor Bogdanow Dornelles**, desenvolvedor back-end com foco em **Java e Go**. Reúne experiências profissionais, projetos e tecnologias, com interface em português e inglês e navegação pensada primeiro para dispositivos móveis.

O site é uma aplicação React com TypeScript e Vite. O conteúdo destaca minha atuação em sistemas distribuídos, concorrência, performance, observabilidade e operação em produção.

## O que você encontra

- **Apresentação:** especialidade, redes profissionais e acesso ao contato.
- **Experiência profissional:** Casas Bahia, Lighthouse, alocação na ZEMA e experiência internacional com a KidsBanner Games, no Canadá.
- **Projetos:** Smart Expenses API e Desafio 1BRC, com contexto técnico e links para os repositórios.
- **Sobre:** tecnologias e práticas utilizadas no desenvolvimento back-end.
- **Contato e currículo:** envio ou cópia do e-mail e download do currículo conforme o idioma selecionado.

Experiências e projetos têm cards compactos com detalhes expansíveis. As animações respeitam a preferência de movimento reduzido do dispositivo.

## Tecnologias do site

| Tecnologia | Uso |
| --- | --- |
| React 18 + TypeScript | Componentes e tipagem |
| Vite 7 | Desenvolvimento local e build |
| Chakra UI 2 + Emotion | Estilos e layout responsivo |
| Framer Motion | Transições dos componentes |
| React Router | Roteamento e redirecionamento das URLs antigas |
| Lucide + React Icons | Ícones |
| Testing Library + jsdom | Verificações automatizadas de interação |

## Executar localmente

**Requisitos:** Node.js **24.x**, conforme `package.json`, e npm.

```bash
git clone https://github.com/Victor-BwD/portfolio-2.0.git
cd portfolio-2.0
npm ci
npm run dev
```

O Vite abre o navegador automaticamente. A porta configurada é **3000**: [http://localhost:3000](http://localhost:3000). Se estiver ocupada, consulte o endereço informado no terminal.

A configuração atual funciona sem arquivo `.env` ou serviço de backend. Algumas imagens, como o avatar e as capturas dos projetos, são carregadas de serviços externos.

## Comandos

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm start` | Alternativa para iniciar o mesmo servidor |
| `npm run check:ui` | Executa as verificações de interação |
| `npm run build` | Verifica os tipos com TypeScript e gera o site em `dist/` |
| `npm run preview` | Serve o build localmente para conferência |

Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

Abra o endereço exibido pelo comando de preview.

## Validação

```bash
npm run check:ui
npm run build
```

A checagem de UI, em [scripts/check-ui.cjs](scripts/check-ui.cjs), usa um DOM simulado e larguras configuradas de **320, 375, 768 e 1440 px**. Verifica expansão e fechamento dos detalhes, fechamento por Escape e retorno de foco, troca de idioma, menu mobile, links e redirecionamento das antigas páginas de projeto.

A revisão visual de espaçamento, imagens e animações deve ser feita no navegador, em tamanhos de celular e desktop.

## Estrutura

```text
public/
  companies/                 # Imagens das empresas
  *.pdf                      # Currículos em português e inglês
scripts/
  check-ui.cjs               # Checagem de interação
src/
  components/
    Apresentation.tsx        # Apresentação e redes profissionais
    Experience.tsx           # Experiências e responsabilidades
    Projects.tsx             # Projetos e detalhes expansíveis
    About.tsx                # Sobre, tecnologias e contato
    Nav.tsx                  # Menu, idioma e download do currículo
    Footer.tsx               # Rodapé
  context/
    LanguageContext.tsx      # Estado do idioma e atributo lang
  data/
    technologies.ts          # Metadados das tecnologias
  views/
    Home.tsx                 # Composição das seções
  App.tsx                    # Rotas
  index.tsx                  # Inicialização e provider do Chakra
index.html                   # HTML inicial e metadados
vite.config.ts               # Configuração do Vite
```

## Atualizar o conteúdo

| O que alterar | Onde editar |
| --- | --- |
| Título, apresentação e redes sociais | [Apresentation.tsx](src/components/Apresentation.tsx) |
| Empresas, períodos e responsabilidades | [Experience.tsx](src/components/Experience.tsx) |
| Projetos, imagens, descrições e repositórios | Array `projects` em [Projects.tsx](src/components/Projects.tsx) |
| Biografia, ordem das tecnologias e e-mail | [About.tsx](src/components/About.tsx) |
| Cores e metadados das tecnologias | [technologies.ts](src/data/technologies.ts) |
| Menu e arquivos de currículo por idioma | [Nav.tsx](src/components/Nav.tsx) |
| Ordem das seções | [Home.tsx](src/views/Home.tsx) |
| Título da aba e descrição do site | [index.html](index.html) |

Ao editar textos, atualize as versões **PT e EN**. Para substituir os currículos, mantenha os nomes dos PDFs em `public/` ou ajuste os caminhos em `Nav.tsx`. Os arquivos dessa pasta são servidos a partir da raiz do site.

## Publicação

Execute `npm ci` e `npm run build`, e publique a pasta **`dist/`** em uma hospedagem de arquivos estáticos.

Configure a hospedagem para encaminhar rotas da aplicação para `index.html`. Isso permite acessar diretamente URLs antigas como `/project/2`, que são redirecionadas para `/#projects`.

## Contato

[GitHub](https://github.com/Victor-BwD) · [LinkedIn](https://www.linkedin.com/in/victorbwd/) · [E-mail](mailto:victor.bogdanowdornelles@gmail.com)