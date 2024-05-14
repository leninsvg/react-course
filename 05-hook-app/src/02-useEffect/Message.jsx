import {useEffect, useState} from "react";

export const Message = () => {
    const [coords, setCoords] = useState({x: 0, y: 0})
    useEffect(() => {
        console.log('Message mounted');
        /**
         *  La funcion tiene que ser la misma para que apunte a la misma funcion en memoriu
         *  tanto en el evento del addEventListener como en el del removeEventListener
         * @param x
         * @param y
         */
        const onMouseMove = ({x, y}) => {
            setCoords({x, y})
            console.log('onMouseMove', x, y);
        }
        window.addEventListener('mousemove', onMouseMove)
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            console.log('Message unmounted')
        };
    }, []);
    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords, null, 2)}
        </>
    );
}