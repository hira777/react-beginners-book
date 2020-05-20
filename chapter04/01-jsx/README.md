# JSX

JSX を利用したサンプルコード。

## 動作環境

- Node.js: v12.16.1
- npm: v6.14.4
- Yarn: v1.22.4

## 使い方

このディレクトリ上で以下のコマンドを実行してください。

```bash
yarn
```

その後、以下のコマンドを実行すれば、アプリッケーションが起動します。

```bash
yarn start
```

## サンプルコードの確認方法

このサンプルコードでは、以下のように１つのファイルに複数のサンプルコードが存在します。

```js
import React from 'react';

/* 1. JavaScript 式を埋め込む */
function add(a, b) {
  return a + b;
}

function App() {
  const message = 'React';

  return (
    <div>
      <p>Hello {message}</p>
      <p>1 + 2 = {add(1, 2)}</p>
    </div>
  );
}

/* 2. 属性値に式を埋め込む */
// function App() {
//   const url = 'https://reactjs.org/';

//   return <a href={url}>React</a>;
// }

/* 3. 属性をまとめて埋め込む */
// function App() {
//   const attrs = {
//     src: './logo.jpg',
//     alt: 'React'
//   };

//   return <img {...attrs} />;
// }

// 省略...

export default App;
```

そのため、動作を確認したいもの以外はすべてコメントアウトしてください。

例えば、「2. 属性値に式を埋め込む」の動作を確認したい場合は、次のようにすれば確認できます。

```js
import React from 'react';

/* 1. JavaScript 式を埋め込む */
// function add(a, b) {
//   return a + b;
// }

// function App() {
//   const message = 'React';

//   return (
//     <div>
//       <p>Hello {message}</p>
//       <p>1 + 2 = {add(1, 2)}</p>
//     </div>
//   );
// }

/* 2. 属性値に式を埋め込む */
function App() {
  const url = 'https://reactjs.org/';

  return <a href={url}>React</a>;
}

/* 3. 属性をまとめて埋め込む */
// function App() {
//   const attrs = {
//     src: './logo.jpg',
//     alt: 'React'
//   };

//   return <img {...attrs} />;
// }

// 省略...

export default App;
```
