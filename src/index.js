import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

injectGlobal`
  @font-face {
    font-family: 'Lars';
    src: url('/Lars-Regular.otf');
  }

  body {
      font-family: 'Lars', arial, helvetica;
      line-height: 1.25;
      margin: 0;
  }

  *:focus {
    outline: none;
  }

  input:focus::-webkit-input-placeholder {
      opacity: 0;
  }
`
