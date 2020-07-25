import React, {useState} from 'react';
import PropTypes from 'prop-types';

/**
 * CounterApp es un componente que posee UI/UX para manipular y ver
 * un contador.
 * @param {NUmber} value
 */
const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter( c => c + 1);

  const handleMinus = () => setCounter( c => c - 1 );

  const handleReset = () => setCounter( c => value );

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>1+</button>
      <button onClick={handleMinus}>1-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

CounterApp.propTypes = {
  value : PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
  value : 10,
}

export default CounterApp;