import PropTypes from 'prop-types';

import {useState} from 'react';

export const CounterApp = (
    {
        // eslint-disable-next-line react/prop-types
        value
    }) => {
    console.log('render 1')
    const [counter, setCounter] = useState(value)
    const handleAdd = () => {
        setCounter(counter + 1);
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
