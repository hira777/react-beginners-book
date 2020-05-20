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

/* 4. ルート要素は１つだけ定義できる */
// function App() {
//   // ルート要素が複数存在するため、エラーが発生する
//   return (
//     <p>Hello React</p>
//     <p>Hello Vue.js</p>
//   );
// }

/* 5. ルート要素は１つだけ定義できる その２ */
// function App() {
//   return (
//     // ルート要素は <div> だけになるため、エラーは発生しない
//     <div>
//       <p>Hello React</p>
//       <p>Hello Vue.js</p>
//     </div>
//   );
// }

/* 6. ルート要素は１つだけ定義できる その３ */
// function App() {
//   return (
//     <>
//       <p>Hello React</p>
//       <p>Hello Vue.js</p>
//     </>
//   );
// }

/* 7. すべてのタグを閉じる必要がある */
// function App() {
//   return (
//     // <br> は閉じタグではないため、エラーが発生する
//     <div>
//       <p>
//         Hello React
//         <br>
//         Hello Vue.js
//       </p>
//     </div>
//   );
// }

/* 8. class などの属性は利用できず、代替の属性を利用する必要がある */
// function App() {
//   return <h1 className="heading">Hello React</h1>;
// }

export default App;
