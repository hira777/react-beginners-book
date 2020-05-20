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
