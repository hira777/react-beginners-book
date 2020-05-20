// React を利用する場合、必ず react を import する必要がある。
import React from 'react';

// App コンポーネント
function App() {
  // JSX という JavaScript 構文の拡張（JavaScript に独自の構文を拡張したもの）を利用すれば
  // JavaScript に HTML のような構文を書ける。JSX はブラウザでは動作しないので通常の JavaScript に変換する
  // 必要があるが、Create React App で作成した開発環境では変換も自動で行ってくれる。
  // そのため、こちら側では何もせずに JSX を利用できる（JavaScrtipt に HTML のような構文を書ける）。
  return (
    <div>
      <p>Hello React</p>
    </div>
  );
}

// 他の JavaScript ファイルから import して利用できるようにするため、export する。
export default App;
