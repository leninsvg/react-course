import PropTypes from 'prop-types';

import {useState} from 'react';

export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value)
    console.log('render 1', counter)
    const handleAdd = () => {
        setCounter(counter + 1);
        setCounter((c) => c + 1);
    }

    const handleDismiss = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (<>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>
            +1
        </button>
        <button onClick={handleDismiss}>
            -1
        </button>
        <button onClick={handleReset}>
            reset
        </button>
    </>)
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
