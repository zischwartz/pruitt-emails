import React from 'react';
import ReactDOM from 'react-dom';

// this is what you'd want for an actual app in prod

import App from './app';


const render = () => {
  ReactDOM.render(
     <App/>, document.getElementById('root')
  );
};

render()
