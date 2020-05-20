// コンポーネントで state を管理するため、useState を import する
// コンポーネントに副作用を追加するため、useEffect を import する
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  memo,
  useContext,
  createContext,
  useRef
} from 'react';

/* 1. useState の利用例 */
function App() {
  // count という state と setCount という count を更新する関数を定義。
  // 今回、useState に 0 を渡しているため count の初期値は 0 になる。
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* count を描画する */}
      <p>Count: {count}</p>
      {/* setCount に引数を渡して実行すると count が更新される。
      今回はボタンをクリック時に setCount(count + 1) を実行しているため、
      次のようにクリックする毎に count が更新され、コンポーネントが再描画される。
      - 1 回目のクリックで setCount(0 + 1) が実行され、count が 1 に更新される。
      - 2 回目のクリックで setCount(1 + 1) が実行され、count が 2 に更新される。 */}
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

/* 2. state を更新する関数の引数に関数を渡す */
// function App() {
//   // count（state）と setCount（stateを更新する関数）を定義。
//   // 今回、useState に 5 を渡しているため count の初期値は 5 になる。
//   const [count, setCount] = useState(5);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       {/* 以下のように state を更新する関数には、引数に関数を渡すこともできる。
//       引数に渡した関数（prevCount => prevCount + 1）の引数（prevCount）は現在の state になる。
//       そのため prevCount は現在の count が格納されている。
//       関数の戻り値が新しい state になるため、次のようにクリックする毎に count が更新される。
//       - 1 回目のクリックで 5 => 5 + 1 が実行され、count が 6 に更新される。
//       - 2 回目のクリックで 6 => 6 + 1 が実行され、count が 7 に更新される。
//       */}
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>click</button>
//     </div>
//   );
// }

/* 3. useEffect の利用例 */
// function App() {
//   const [count, setCount] = useState(0);

//   // <p id="effectHook"></p> にテキストを描画する副作用。
//   // 今回の場合、App コンポーネントが再描画される度に実行される。
//   // 副作用はコンポーネントの描画後に実行されるため、App コンポーネントが
//   // 描画した <p id="effectHook"></p> も操作できる。
//   // コンポーネントは state が更新される度に再描画されるため、App コンポーネントは
//   // count が更新される度に再描画される。そのため、ボタンをクリックする度に
//   // App コンポーネントは再描画され、この副作用も実行される。
//   useEffect(() => {
//     document.getElementById('effectHook').innerText = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p id="effectHook"></p>
//       <button onClick={() => setCount(count + 1)}>click</button>
//     </div>
//   );
// }

/* 4. 副作用を１度だけ実行させる */
// function App() {
//   const [count, setCount] = useState(0);

//   // ログを出力する副作用。
//   // 第２引数に [] を渡すと副作用はマウント後の１度しか実行されない。
//   // そのため、count が更新されて App コンポーネントが更新されても、この副作用は実行されない。
//   useEffect(() => {
//     console.log('mounted');
//   }, []);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>click</button>
//     </div>
//   );
// }

/* 5. 副作用に依存する値が更新した時だけ、副作用を実行させる */
// function App() {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);

//   // ログを出力する副作用。
//   // 第２引数に副作用が依存する値を渡すと、その値が更新された時だけ副作用は実行される。
//   // そのため、今回は count か count2 が更新された時だけ副作用が実行される。
//   // count3 が更新されても実行されない。
//   useEffect(() => {
//     console.log(`You clicked ${count} times`);
//     console.log(`You clicked2 ${count2} times`);
//   }, [count, count2]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>click</button>

//       <p>You clicked2 {count2} times</p>
//       <button onClick={() => setCount2(count2 + 1)}>click2</button>

//       <p>You clicked3 {count3} times</p>
//       <button onClick={() => setCount3(count3 + 1)}>click2</button>
//     </div>
//   );
// }

/* 6 コンポーネントがアンマウント、もしくは副作用が再実行した時に副作用を実行させる */
// const LIMIT = 60;

// // カウントダウンをする（60 から 0 を描画する）コンポーネント。
// function Timer() {
//   // timeLeft という state と setTimeLeft を更新する関数を定義。
//   // 今回、useState に LIMIT（60）を渡しているため timeLeft の初期値は 60 になる
//   const [timeLeft, setTimeLeft] = useState(LIMIT);

//   // timeLeft をリセット（60に戻す）。
//   const reset = () => {
//     setTimeLeft(LIMIT);
//   };

//   // timeLeft を更新する。
//   const tick = () => {
//     console.log('tick');
//     setTimeLeft(prevTime => (prevTime === 0 ? LIMIT : prevTime - 1));
//   };

//   // setInterval で１秒毎に tick を実行するタイマーを作成する副作用。
//   // 第２引数に [] を渡しているので、この副作用はレンダリング後の１度しか実行されない。
//   useEffect(() => {
//     console.log('create Timer');
//     const timerId = setInterval(tick, 1000);

//     // 副作用が返す関数はコンポーネントがアンマウント、もしくは副作用が再度実行された時に呼ばれる。
//     // ↑で作成したタイマー（timerId）は削除しない限り、延々と実行され続けてしまう。
//     // そのため、コンポーネントがアンマウント、もしくは副作用が再度実行された時に clearInterval でタイマーを削除する。
//     return () => {
//       console.log('cleanup Timer');
//       clearInterval(timerId);
//     };
//   }, []);

//   return (
//     <div>
//       <p>time: {timeLeft}</p>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
// }

// function App() {
//   // visible（state）と setVisible（stateを更新する関数）を定義。
//   // 今回、useState に true を渡しているため visible の初期値は true になる
//   const [visible, setVisible] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setVisible(!visible)}>toggle Timer</button>

//       {/* visible が true であれば Timer コンポーネントをレンダリングする。
//           false にすれば何もレンダリングされない（Timer コンポーネントがアンマウントされる）ため、
//           Timer コンポーネントの console.log('cleanup Timer'); などが実行される。 */}
//       {visible ? <Timer /> : ''}
//     </div>
//   );
// }

/* 7 useMemo の利用例 */
// function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   // 引数の数値を２倍にして返す。無駄なループを実行しているため処理にかなりの時間がかかる。
//   // 「increment1」をクリックすると count が更新され、この処理が実行される。
//   // そのため、「increment1」をクリックしてから再レンダリングまでに時間がかかる。
//   const dubble = count => {
//     let i = 0;
//     while (i < 1000000000) i++;
//     return count * 2;
//   };

//   // count を２倍にした値をメモ化する。
//   // 第２引数に count1 を渡しているため、count1 が更新された時だけ、
//   // () => dubble(count1) が再度実行され、戻り値を再びメモ化する。
//   // count2 を更新しても、メモ化された値を再利用するため、() => dubble(count1) は実行されない。
//   // そのため、「increment1」をクリック時は dubbleCount が再計算されるため、
//   // 再レンダリングに時間がかかるが、「increment2」をクリック時はメモ化された
//   // dubbleCount を再利用するため、すぐに再レンダリングされる。
//   const dubbleCount = useMemo(() => dubble(count1), [count1]);

//   // 以下のように dubbleCount を定義してしまうと、メモ化がされず
//   //「increment2」をクリック時も dubbleCount が再計算されてしまうため、
//   // 再レンダリングに時間がかかる。
//   // const dubbleCount = dubble(count1);

//   return (
//     <div>
//       <p>Count1: {count1}</p>
//       <p>DubbleCount: {dubbleCount}</p>
//       <button onClick={() => setCount1(count1 + 1)}>increment1</button>

//       <p>Count2: {count2}</p>
//       <button onClick={() => setCount2(count2 + 1)}>increment2</button>
//     </div>
//   );
// }

// React.memo でコンポーネントを囲わないと、メモ化した関数を渡しても再描画されてしまう

// const CountButton = memo(({ id, onClick, count }) => {
//   useEffect(() => {
//     console.log(`render ${id}`);
//   });

//   return <button onClick={onClick}>{count}</button>;
// });

/* 8 useCallback の利用例 */
// コンポーネントを memo() でラップすることで描画結果をメモする。
// そして次の描画時、新しい描画結果が前回の描画結果と同じかどうかチェックし、
// 同じであれば前回の描画結果を利用する。そのため、props（id、onClick）が
// 変更されない限り、メモ化された描画結果が再利用される。
// const Button = memo(({ id, onClick }) => {
//   // コンポーネントが描画したら副作用が実行される。
//   // メモ化された描画結果を再利用した場合、副作用は実行されない。
//   useEffect(() => {
//     console.log(`render ${id}`);
//   });
//   return <button onClick={onClick}>{id}</button>;
// });

// function App() {
//   const [count1, setCount1] = useState(0);
//   // コールバック関数 () => setCount1(count1 + 1) をメモ化する。
//   // 第２引数に count1 を渡しているため、count1 が更新された時だけ、再びメモ化される。
//   const increment1 = useCallback(() => setCount1(count1 + 1), [count1]);
//   // ↑ではなく、以下を定義した場合、コールバック関数はメモ化されないため
//   // count2 を更新してもこの関数は再生成され、increment1 を渡している Button コンポーネントも再描画される。
//   // const increment1 = () => setCount1(count => count + 1);

//   const [count2, setCount2] = useState(0);
//   // 第２引数が [] の場合、コールバック関数は一度だけ生成される。
//   const increment2 = useCallback(() => setCount2(count => count + 1), []);

//   return (
//     <div>
//       <p>{count1}</p>
//       {/* 「Increment2」をクリックした時は increment1() は再利用されるため、
//       このコンポーネントは再描画されない */}
//       <Button id={'Increment1'} onClick={increment1} />

//       <p>{count2}</p>
//       {/* increment2() は一度だけ生成するため、どちらのボタンをクリックしても
//       このコンポーネントは再描画されない */}
//       <Button id={'Increment2'} onClick={increment2} />
//     </div>
//   );
// }

/* 9 useContext の利用例 */
// const MyContext = createContext();

// function App() {
//   const [count, setCount] = useState(0);
//   const value = {
//     name: 'soarflat',
//     handleClick: () => setCount(count => count + 1)
//   };

//   return (
//     <div>
//       <p>count: {count}</p>
//       <MyContext.Provider value={value}>
//         <ChildComponent />
//       </MyContext.Provider>
//     </div>
//   );
// }

// function ChildComponent() {
//   return <GrandChildComponent />;
// }

// function GrandChildComponent() {
//   // ツリー内の最も近い上位の一致する Provider（<MyContext.Provider value={value}>）から
//   // コンテキストの値を取得する。そのため、このコンポーネントの初期描画時の context は
//   // {
//   //  name: 'soarflat',
//   //   handleClick: () => setCount(count => count + 1)
//   // }
//   // になる
//   const context = useContext(MyContext);

//   return (
//     <>
//       <p>{context.name}</p>
//       <button onClick={context.handleClick}>increment</button>
//     </>
//   );
// }

/* 10 useRef の利用例 */
// function App() {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     if (!inputEl.current) return;

//     inputEl.current.focus();
//   };

//   return (
//     <>
//       {/* ref 属性に inputEl を指定することで、inputEl.current で DOM にアクセスできる */}
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>input要素をフォーカスする</button>
//     </>
//   );
// }

/* 11 コンポーネントの更新前の値を保持する */
// function App() {
//   const [count, setCount] = useState(0);
//   // DOM の参照だけではなく、コンポーネントのインスタンス変数として利用できる。
//   // コンポーネントが再描画されても、参照する ref オブジェクトは変わらないため、
//   // 前回の state を保持することなどができる。
//   const prevCountRef = useRef(0);

//   useEffect(() => {
//     // ref オブジェクトが更新されてもコンポーネントは再描画されない。
//     prevCountRef.current = count;
//   });

//   return (
//     <>
//       <p>
//         count: {count}, before: {prevCountRef.current}
//       </p>
//       <button onClick={() => setCount(count + 1)}>increment</button>
//     </>
//   );
// }

/* 12 カスタムフックを定義する */
// カウンターの state とロジックを持つカスタムフック
// カスタムフックの名前は必ず use から始まる必要がある。
// function useCounter(initialCount) {
//   const [count, setCount] = useState(initialCount);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return { count, increment, decrement };
// }

// function App() {
//   const counter = useCounter(0);
//   // このカスタムフックはオブジェクトを返しているので、↑は以下のようにも書ける
//   // const {count, increment, decrement} = useCounter();

//   return (
//     <div>
//       <p>count: {counter.count}</p>
//       <button onClick={counter.decrement}>-</button>
//       <button onClick={counter.increment}>+</button>
//     </div>
//   );
// }

/* 13 カスタムフックを定義する その２ */
// function useCounter(initialCount) {
//   const [count, setCount] = useState(initialCount);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return { count, increment, decrement };
// }

// function App() {
//   const counter = useCounter(0);
//   const counter2 = useCounter(10);

//   return (
//     <div>
//       <p>count: {counter.count}</p>
//       <button onClick={counter.decrement}>-</button>
//       <button onClick={counter.increment}>+</button>

//       <p>count: {counter2.count}</p>
//       <button onClick={counter2.decrement}>-</button>
//       <button onClick={counter2.increment}>+</button>
//     </div>
//   );
// }

export default App;
