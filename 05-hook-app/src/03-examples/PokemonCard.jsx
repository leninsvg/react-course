import PropTypes from "prop-types";
import {useLayoutEffect, useRef, useState} from 'react';

export const PokemonCard = ({id, name, sprites = []}) => {
    const h2Ref = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0});
    useLayoutEffect(() => {
        const {height, width} = h2Ref.current.getBoundingClientRect();
        setBoxSize({width, height});
    }, [id]);
    return (
        <>
            <section style={{height: '200px'}}>
                <h2 ref={h2Ref} className={'text-capitalize'}>#{id} - {name}</h2>
                <div>
                    {
                        sprites.map((sprite, index) => (
                            <img key={index} src={sprite} alt={name} />
                        ))
                    }
                </div>
            </section>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}

PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.arrayOf(PropTypes.string).isRequired,
}