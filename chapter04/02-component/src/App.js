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

/* 4. Props をまとめて渡す */
// function Hello({ firstName, lastName }) {
//   return (
//     <p>
//       Hello, {firstName} {lastName}
//     </p>
//   );
// }

// function App() {
//   const data = {
//     firstName: 'John',
//     lastName: 'Doe'
//   };

//   return <Hello {...data} />;
// }

/* 5. Props は読み取り専用（変更してはいけない） */
// function Hello({ name }) {
//   // Props を変更してはいけない
//   name = 'soarflat';

//   return <p>Hello, {name}</p>;
// }

// function App() {
//   const name = 'John Doe';

//   return <Hello name={name} />;
// }

export default App;
