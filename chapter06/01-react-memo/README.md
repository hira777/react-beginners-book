# React.memo

React.memo を利用したサンプルコード。

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
import React, { useState, useEffect, useRef } from 'react';

/* 1. React.memo を利用しない場合 */
// App コンポーネントが再描画する度に再描画される
function Child({ count }) {
  console.log('render Child');
  return <p>Child: {count}</p>;
}

export default function App() {
  console.log('render App');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
      <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
      <p>App: {count1}</p>
      <Child count={count2} />
    </>
  );
}

/* 2. React.memo を利用する場合 */
// // props.count が更新されない限り、再描画されない。
// const Child = React.memo(({ count }) => {
//   console.log('render Child');
//   return <p>Child: {count}</p>;
// });

// export default function App() {
//   console.log('render App');
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   return (
//     <>
//       <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
//       <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
//       <p>App: {count1}</p>
//       <Child count={count2} />
//     </>
//   );
// }

// 省略...
```

そのため、動作を確認したいもの以外はすべてコメントアウトしてください。

例えば、「2. React.memo を利用する場合」の動作を確認したい場合は、次のようにすれば確認できます。

```js
import React, { useState, useEffect, useRef } from 'react';

/* 1. React.memo を利用しない場合 */
// // App コンポーネントが再描画する度に再描画される
// function Child({ count }) {
//   console.log('render Child');
//   return <p>Child: {count}</p>;
// }

// export default function App() {
//   console.log('render App');
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   return (
//     <>
//       <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
//       <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
//       <p>App: {count1}</p>
//       <Child count={count2} />
//     </>
//   );
// }

/* 2. React.memo を利用する場合 */
// props.count が更新されない限り、再描画されない。
const Child = React.memo(({ count }) => {
  console.log('render Child');
  return <p>Child: {count}</p>;
});

export default function App() {
  console.log('render App');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
      <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
      <p>App: {count1}</p>
      <Child count={count2} />
    </>
  );
}

// 省略...
```
