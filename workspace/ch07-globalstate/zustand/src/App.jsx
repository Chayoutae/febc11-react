import { useEffect, useState } from 'react';
import Left1 from '@components/Left1';
import Right1 from '@components/Right1';

function App() {
  const [count, setCount] = useState(0);

  const countUp = function(step){
    setCount(count + step);
  };

  useEffect(()=>{
    console.log('# App 렌더링.');
  });

  return (
    <>
      <h1>전역 상태 관리 - Zustand</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          <Left1 />
          <Right1 />
        </div>
      </div>
    </>
  );
}

export default App;