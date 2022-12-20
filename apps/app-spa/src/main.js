import { navigateToUrl, registerApplication, start } from 'single-spa';

window.$navigateToUrl = navigateToUrl;

registerApplication({
  name: 'app-one',
  app: () => import('http://localhost:9691/dist/main.js'),
  activeWhen: (location) => location.pathname.startsWith('/one'),
  customProps: {},
});

registerApplication({
  name: 'app-two',
  app: () => import('http://localhost:9692/dist/main.js'),
  activeWhen: (location) => location.pathname.startsWith('/two'),
  customProps: {},
});

start();
