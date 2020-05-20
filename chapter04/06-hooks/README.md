# フック

フックを利用したサンプルコード。

## 動作環境

- Node.js: v12.16.1
- npm: v6.14.4
- Yarn: v1.22.4

## 使い方

このディレクトリ上で以下のコマンドを実行してください。

```bash
yarn
```

その後、以下のコマンドを実行すれば、アプリケーションが起動します。

```bash
yarn start
```

## サンプルコードの確認方法

このサンプルコードでは、以下のように１つのファイルに複数のサンプルコードが存在します。

```js
// コンポーネントで state を管理するため、useState を import する
// コンポーネントに副作用を追加するため、useEffect を import する
import React, { useState, useEffect } from 'react';

/* 1. useState の利用例 */
function App() {
  // count という state と setCount という count を更新する関数を定義。
  // 今回、useState に 0 を渡しているため count の初期値は 0 になる。
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* count を描画する */}
      <p>Count: {count}</p>
      {/* setCount に引数を渡して実行すると count が更新される。
      今回はボタンをクリック時に setCount(count + 1) を実行しているため、
      次のようにクリックする毎に count が更新され、コンポーネントが再描画される。
      - 1 回目のクリックで setCount(0 + 1) が実行され、count が 1 に更新される。
      - 2 回目のクリックで setCount(1 + 1) が実行され、count が 2 に更新される。 */}
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

/* 2. state を更新する関数の引数に関数を渡す */
// function App() {
//   // count（state）と setCount（stateを更新する関数）を定義。
//   // 今回、useState に 5 を渡しているため count の初期値は 5 になる。
//   const [count, setCount] = useState(5);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       {/* 以下のように state を更新する関数には、引数に関数を渡すこともできる。
//       引数に渡した関数（prevCount => prevCount + 1）の引数（prevCount）は現在の state になる。
//       そのため prevCount は現在の count が格納されている。
//       関数の戻り値が新しい state になるため、次のようにクリックする毎に count が更新される。
//       - 1 回目のクリックで 5 => 5 + 1 が実行され、count が 6 に更新される。
//       - 2 回目のクリックで 6 => 6 + 1 が実行され、count が 7 に更新される。
//       */}
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>click</button>
//     </div>
//   );
// }

// 省略...

export default App;
```

そのため、動作を確認したいもの以外はすべてコメントアウトしてください。

例えば、「2. state を更新する関数の引数に関数を渡す」の動作を確認したい場合は、次のようにすれば確認できます。

```js
// コンポーネントで state を管理するため、useState を import する
// コンポーネントに副作用を追加するため、useEffect を import する
import React, { useState, useEffect } from 'react';

/* 1. useState の利用例 */
// function App() {
//   // count という state と setCount という count を更新する関数を定義。
//   // 今回、useState に 0 を渡しているため count の初期値は 0 になる。
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       {/* count を描画する */}
//       <p>Count: {count}</p>
//       {/* setCount に引数を渡して実行すると count が更新される。
//       今回はボタンをクリック時に setCount(count + 1) を実行しているため、
//       次のようにクリックする毎に count が更新され、コンポーネントが再描画される。
//       - 1 回目のクリックで setCount(0 + 1) が実行され、count が 1 に更新される。
//       - 2 回目のクリックで setCount(1 + 1) が実行され、count が 2 に更新される。 */}
//       <button onClick={() => setCount(count + 1)}>click</button>
//     </div>
//   );
// }

/* 2. state を更新する関数の引数に関数を渡す */
function App() {
  // count（state）と setCount（stateを更新する関数）を定義。
  // 今回、useState に 5 を渡しているため count の初期値は 5 になる。
  const [count, setCount] = useState(5);

  return (
    <div>
      <p>Count: {count}</p>
      {/* 以下のように state を更新する関数には、引数に関数を渡すこともできる。
      引数に渡した関数（prevCount => prevCount + 1）の引数（prevCount）は現在の state になる。
      そのため prevCount は現在の count が格納されている。
      関数の戻り値が新しい state になるため、次のようにクリックする毎に count が更新される。
      - 1 回目のクリックで 5 => 5 + 1 が実行され、count が 6 に更新される。
      - 2 回目のクリックで 6 => 6 + 1 が実行され、count が 7 に更新される。
      */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        click
      </button>
    </div>
  );
}

// 省略...

export default App;
```
