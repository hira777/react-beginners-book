import React, { useState, useCallback } from 'react';

/* 1. useCallback の利用例 */
const Child = React.memo(({ handleClick }) => {
  console.log('render Child');
  return <button onClick={handleClick}>Child</button>;
});

export default function App() {
  console.log('render App');

  const [count, setCount] = useState(0);
  // 関数をメモ化すれば、新しい handleClick と前回の handleClick は
  // 等価になる。そのため、Child コンポーネントは再描画されない。
  const handleClick = useCallback(() => {
    console.log('click');
  }, []);

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleClick={handleClick} />
    </>
  );
}
