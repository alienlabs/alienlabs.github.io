//
// Copyright 2021 DXOS.org
//

import React from 'react';
import ReactDOM from 'react-dom';

import { Main } from './components';

const init = () => {
  const { search } = new URL(document.location.href);
  const params = new URLSearchParams(search);
  ReactDOM.render(<Main domain={params.get('domain') || 'new:co.com'} />, document.getElementById('root'), () => {
    console.log('ok');
  });
};

init();
