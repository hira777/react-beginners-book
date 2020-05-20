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

//   return (
//     // イベントハンドラは関数を指定する必要があるため、onClick={handleClick('React')} の
//     // ような関数の実行結果を指定しても動作しない。
//     <button onClick={() => handleClick('React')}>click</button>
//   );
// }

/* 4 イベントハンドラに引数を渡す その２ */
// function App() {
//   // 「console.log(`Hello, ${message}`) を実行する関数」を返す関数。
//   function handleClick(message) {
//     return () => console.log(`Hello, ${message}`);
//   }

//   return <button onClick={handleClick('React')}>click</button>;
// }

/* 5 Event オブジェクトを利用する */
// function App() {
//   function handleClick(event) {
//     event.preventDefault();
//     console.log('Hello, React');
//   }

//   return (
//     <a href="https://reactjs.org/" onClick={handleClick}>
//       React
//     </a>
//   );
// }

/* 6 Event オブジェクトを利用する その２ */
// function App() {
//   function handleClick(event, message) {
//     event.preventDefault();
//     console.log(`Hello, ${message}`);
//   }

//   return (
//     <a href="https://reactjs.org/" onClick={event => handleClick(event, 'React')}>
//       React
//     </a>
//   );
// }

export default App;
