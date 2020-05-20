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

/* 4. 三項演算子を利用する */
// function App() {
//   const isReact = true;

//   return isReact ? <p>Hello React</p> : <p>Hello Vue.js</p>;
// }

/* 5. 即時関数を利用する */
// function App() {
//   const isReact = false;

//   return (
//     <div>
//       {
//         // 即時関数の中でないと if 文は書けないため注意。
//         (() => {
//           if (isReact) {
//             return <p>Hello React</p>;
//           }

//           return <p>Hello Vue.js</p>;
//         })()
//       }
//     </div>
//   );
// }

export default App;
