import React from "react";
import Button from './Button';

function Counter(){
  let [count, setCount] = React.useState(0);

  const handleDown = () => {
    setCount(count - 1);
  };
  const handleUp = () => {
    setCount(count + 1);
  };
  const handleReset = event => {
    setCount(0);
  };

  return (
    <div id="counter">
      <Button color="red" type="submit" onClick={ handleDown }>-</Button>
      <Button onClick={ (event) => handleReset(event) }>0</Button>
      <Button color="#123123" onClick={ handleUp }>+</Button>
      <span>{ count }</span>
    </div>
  );
}

export default Counter;