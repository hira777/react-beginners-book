import React, { useState, useEffect, useRef } from 'react';

/* 1. React.memo を利用しない場合 */
// App コンポーネントが再描画する度に再描画される
function Child({ count }) {
  console.log('render Child');
  return <p>Child: {count}</p>;
}

export default function App() {
  console.log('render App');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
      <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
      <p>App: {count1}</p>
      <Child count={count2} />
    </>
  );
}

/* 2. React.memo を利用する場合 */
// // props.count が更新されない限り、再描画されない。
// const Child = React.memo(({ count }) => {
//   console.log('render Child');
//   return <p>Child: {count}</p>;
// });

// export default function App() {
//   console.log('render App');
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   return (
//     <>
//       <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
//       <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
//       <p>App: {count1}</p>
//       <Child count={count2} />
//     </>
//   );
// }

/* 3. レンダリングコストが高いコンポーネントをメモ化する */
// const Child = React.memo(({ count }) => {
//   let i = 0;
//   // 無駄なループを実行しているため処理にかなりの時間がかかる。
//   while (i < 1000000000) i++;
//   console.log('render Child');
//   return <p>Child: {count}</p>;
// });

// export default function App() {
//   console.log('render App');

//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   return (
//     <>
//       <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
//       <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
//       <p>App: {count1}</p>
//       <Child count={count2} />
//     </>
//   );
// }

/* 4. 頻繁に再レンダリングされるコンポーネント内の子コンポーネントをメモ化する */
// const Child = React.memo(() => {
//   console.log('render Child');
//   return <p>Child</p>;
// });

// export default function App() {
//   console.log('render App');

//   const [timeLeft, setTimeLeft] = useState(100);
//   const timerRef = useRef(null);
//   const timeLeftRef = useRef(timeLeft);

//   useEffect(() => {
//     timeLeftRef.current = timeLeft;
//   }, [timeLeft]);

//   const tick = () => {
//     if (timeLeftRef.current === 0) {
//       clearInterval(timerRef.current);
//       return;
//     }
//     setTimeLeft(prevTime => prevTime - 1);
//   };

//   const start = () => {
//     timerRef.current = setInterval(tick, 10);
//   };

//   const reset = () => {
//     clearInterval(timerRef.current);
//     setTimeLeft(100);
//   };

//   return (
//     <>
//       <button onClick={start}>start</button>
//       <button onClick={reset}>reset</button>
//       <p>App: {timeLeft}</p>
//       <Child />
//     </>
//   );
// }

/* 5. コールバック関数を Props として受け取ったコンポーネントは必ず再レンダリングされる */
// const Child = React.memo(({ handleClick }) => {
//   console.log('render Child');
//   return <button onClick={handleClick}>Child</button>;
// });

// export default function App() {
//   console.log('render App');

//   const [count, setCount] = useState(0);
//   // 関数はコンポーネントが再レンダリングされる度に再生成されるため、
//   // 関数の内容が同じでも、新しい handleClick と前回の handleClick は
//   // 異なるオブジェクトなので、等価ではない。
//   // そのため、コンポーネントが再描画される。
//   const handleClick = () => {
//     console.log('click');
//   };

//   return (
//     <>
//       <p>Counter: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment count</button>
//       <Child handleClick={handleClick} />
//     </>
//   );
// }
