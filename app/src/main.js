import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';

let rootElement = document.getElementById('root');
const render = (Component) =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  );

render(App);

if (module.hot) {
  module.hot.accept('./container/App', () => {
    console.log('update!!!!');
    render(App);
  });
}
