# イベントハンドリング

イベントハンドリングのサンプルコード。

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

/* 1. クリック時のイベントハンドリング */
function App() {
  function handleClick() {
    console.log('clicked');
  }

  // 属性はキャメルケース（onClick）で指定し、
  // イベントハンドラは関数（{handleClick}）を指定する必要がある。
  return <button onClick={handleClick}>click</button>;

  // 以下の場合、属性がキャメルケースではないため動作しない。
  // return <button onclick={handleClick}>click</button>

  // 以下の場合、イベントハンドラが文字列のため動作しない。
  // return <button onClick="handleClick">click</button>
}

/* 2. クリック時のイベントハンドリング その２*/
// function App() {
//   return <button onClick={() => console.log('clicked!!')}>click</button>;
// }

/* 3. イベントハンドラに引数を渡す */
// function App() {
//   function handleClick(message) {
//     console.log(`Hello, ${message}`);
//   }

// 省略...

export default App;
```

そのため、動作を確認したいもの以外はすべてコメントアウトしてください。

例えば、「2. クリック時のイベントハンドリング その２」の動作を確認したい場合は、次のようにすれば確認できます。

```js
import React from 'react';

/* 1. クリック時のイベントハンドリング */
// function App() {
//   function handleClick() {
//     console.log('clicked');
//   }

//   // 属性はキャメルケース（onClick）で指定し、
//   // イベントハンドラは関数（{handleClick}）を指定する必要がある。
//   return <button onClick={handleClick}>click</button>;

//   // 以下の場合、属性がキャメルケースではないため動作しない。
//   // return <button onclick={handleClick}>click</button>

//   // 以下の場合、イベントハンドラが文字列のため動作しない。
//   // return <button onClick="handleClick">click</button>
// }

/* 2. クリック時のイベントハンドリング その２*/
function App() {
  return <button onClick={() => console.log('clicked!!')}>click</button>;
}

/* 3. イベントハンドラに引数を渡す */
// function App() {
//   function handleClick(message) {
//     console.log(`Hello, ${message}`);
//   }

// 省略...

export default App;
```
