# 繰り返し描画

繰り返し描画のサンプルコード。

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

/* 1. map を埋め込む */
function App() {
  const books = [
    { id: 1, title: 'React.js&Next.js超入門' },
    { id: 2, title: 'React開発 現場の教科書' },
    { id: 3, title: 'Reactビギナーズガイド' }
  ];

  return (
    <ul>
      {books.map(book => (
        // key 属性は必ず指定する
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}

/* 2. map の実行結果が格納された変数を埋め込む */
// function App() {
//   const books = [
//     { id: 1, title: 'React.js&Next.js超入門' },
//     { id: 2, title: 'React開発 現場の教科書' },
//     { id: 3, title: 'Reactビギナーズガイド' }
//   ];
//   const listItems = books.map(book => <li key={book.id}>{book.title}</li>);

//   return (
//     <div>
//       <ul>{listItems}</ul>
//     </div>
//   );
// }

/* 3. map の実行結果を返す関数を埋め込む */
// function App() {
//   const books = [
//     { id: 1, title: '超入門' },
//     { id: 2, title: '開発 現場の教科書' },
//     { id: 3, title: 'ビギナーズガイド' }
//   ];
//   const listItems = library =>
//     books.map(book => (
//       <li key={book.id}>
//         {library}
//         {book.title}
//       </li>
//     ));

//   return (
//     <div>
//       <ul>{listItems('Vue.js')}</ul>
//     </div>
//   );
// }

export default App;
```

そのため、動作を確認したいもの以外はすべてコメントアウトしてください。

例えば、「2. map の実行結果が格納された変数を埋め込む」の動作を確認したい場合は、次のようにすれば確認できます。

```js
import React from 'react';

/* 1. map を埋め込む */
// function App() {
//   const books = [
//     { id: 1, title: 'React.js&Next.js超入門' },
//     { id: 2, title: 'React開発 現場の教科書' },
//     { id: 3, title: 'Reactビギナーズガイド' }
//   ];

//   return (
//     <ul>
//       {books.map(book => (
//         // key 属性は必ず指定する
//         <li key={book.id}>{book.title}</li>
//       ))}
//     </ul>
//   );
// }

/* 2. map の実行結果が格納された変数を埋め込む */
function App() {
  const books = [
    { id: 1, title: 'React.js&Next.js超入門' },
    { id: 2, title: 'React開発 現場の教科書' },
    { id: 3, title: 'Reactビギナーズガイド' }
  ];
  const listItems = books.map(book => <li key={book.id}>{book.title}</li>);

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

/* 3. map の実行結果を返す関数を埋め込む */
// function App() {
//   const books = [
//     { id: 1, title: '超入門' },
//     { id: 2, title: '開発 現場の教科書' },
//     { id: 3, title: 'ビギナーズガイド' }
//   ];
//   const listItems = library =>
//     books.map(book => (
//       <li key={book.id}>
//         {library}
//         {book.title}
//       </li>
//     ));

//   return (
//     <div>
//       <ul>{listItems('Vue.js')}</ul>
//     </div>
//   );
// }

export default App;
```
