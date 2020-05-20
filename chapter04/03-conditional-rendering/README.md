# 条件分岐（条件に応じた要素の描画）

条件分岐のサンプルコード。

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
import React from 'react';

/* 1. 条件に応じた JSX を返す */
function Hello({ isReact }) {
  if (isReact) {
    return <p>Hello React</p>;
  }

  return <p>Hello Vue.js</p>;
}

function App() {
  const isReact = false;

  return <Hello isReact={isReact} />;
}

/* 2. 条件に応じた JSX を返す その２ */
// function hello(isReact) {
//   if (isReact) {
//     return <p>Hello React</p>;
//   }

//   return <p>Hello Vue.js</p>;
// }

// function App() {
//   const isReact = false;

//   return hello(isReact);
// }

/* 3. && 演算子を利用する */
// function App() {
//   const isReact = true;

//   return (
//     <div>
//       {isReact && <p>Hello React</p>}
//       {!isReact && <p>Hello Vue.js</p>}
//     </div>
//   );
// }

// 省略...

export default App;
```

そのため、動作を確認したいもの以外はすべてコメントアウトしてください。

例えば、「2. 条件に応じた JSX を返す その２」の動作を確認したい場合は、次のようにすれば確認できます。

```js
import React from 'react';

/* 1. 条件に応じた JSX を返す */
// function Hello({ isReact }) {
//   if (isReact) {
//     return <p>Hello React</p>;
//   }

//   return <p>Hello Vue.js</p>;
// }

// function App() {
//   const isReact = false;

//   return <Hello isReact={isReact} />;
// }

/* 2. 条件に応じた JSX を返す その２ */
function hello(isReact) {
  if (isReact) {
    return <p>Hello React</p>;
  }

  return <p>Hello Vue.js</p>;
}

function App() {
  const isReact = false;

  return hello(isReact);
}

/* 3. && 演算子を利用する */
// function App() {
//   const isReact = true;

//   return (
//     <div>
//       {isReact && <p>Hello React</p>}
//       {!isReact && <p>Hello Vue.js</p>}
//     </div>
//   );
// }

// 省略...

export default App;
```
