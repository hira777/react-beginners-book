// React を利用する場合、必ず react を import する必要がある。
import React from 'react';
// HTML 要素に App コンポーネントを描画する場合、react-dom も必要になる。
// 今回は、App コンポーネントを <div id="root"></div> に描画するため、react-dom も
import ReactDOM from 'react-dom';
// App コンポーネント をインポートする。
import App from './App';

// App コンポーネントを <div id="root"></div> に描画する。
// src/index.js などがビルドされた JavaScript ファイルは public/index.html で読み込まれる。
// そのため、public/index.html の <div id="root"></div> に App コンポーネント が描画される。
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
