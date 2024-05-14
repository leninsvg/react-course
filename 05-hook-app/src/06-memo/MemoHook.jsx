import {useCounter} from '../hooks/index.js';
import {useMemo, useState} from 'react';

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...')
    }
    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {
    const {counter, increment} = useCounter(4000);
    const [show, setShow] = useState(true)
    const memorizeValue = useMemo(() => {
        return heavyStuff(counter)
    }, [counter]);
    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <h4>{memorizeValue}</h4>
            <hr/>
            <button className={'btn btn-primary'} onClick={() => increment()}>
                +1
            </button>
            <button className={'btn btn-outline-primary'} onClick={() => setShow(!show)}>+1
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}