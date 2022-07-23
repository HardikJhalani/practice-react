import React from 'react';
import './App.css';

function App() {
  let [number, setNumber] = React.useState(0);

  function decrease(){setNumber(prevCount => prevCount - 1)};
  function increase(){setNumber(prevCount => prevCount + 1)};

    return (
    <div className="App">
        <button className='counter-minus btn' onClick={decrease}>-</button>
        <div className='counter-count'>
          <h1>{number}</h1>
        </div>
        <button className='counter-plus btn' onClick={increase}>+</button>
    </div>
  );
}

export default App;
