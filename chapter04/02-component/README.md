# コンポーネント

コンポーネントを利用したサンプルコード。

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

/* 1. 関数コンポーネントの定義 */
// Hello コンポーネント
function Hello() {
  return <h1>Hello React</h1>;
}

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

/* 2. Props */
// props.name を受け突る
// function Hello({ name }) {
//   return <p>Hello, {name}</p>;
// }

// function App() {
//   return (
//     <div>
//       {/* "React" を Props として渡す */}
//       <Hello name="React" />
//       {/* "Vue.js" を Props として渡す */}
//       <Hello name="Vue.js" />
//     </div>
//   );
// }

/* 3. 式を Props として渡す */
// function Hello({ name }) {
//   return <p>Hello, {name}</p>;
// }

// function App() {
//   const message = 'React';

//   return <Hello name={message} />;
// }

// 省略...

export default App;
```

そのため、動作を確認したいもの以外はすべてコメントアウトしてください。

例えば、「2. Props」の動作を確認したい場合は、次のようにすれば確認できます。

```js
import React from 'react';

/* 1. 関数コンポーネントの定義 */
// Hello コンポーネント
// function Hello() {
//   return <h1>Hello React</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Hello />
//     </div>
//   );
// }

/* 2. Props */
// props.name を受け突る
function Hello({ name }) {
  return <p>Hello, {name}</p>;
}

function App() {
  return (
    <div>
      {/* "React" を Props として渡す */}
      <Hello name="React" />
      {/* "Vue.js" を Props として渡す */}
      <Hello name="Vue.js" />
    </div>
  );
}

/* 3. 式を Props として渡す */
// function Hello({ name }) {
//   return <p>Hello, {name}</p>;
// }

// function App() {
//   const message = 'React';

//   return <Hello name={message} />;
// }

// 省略...

export default App;
```
