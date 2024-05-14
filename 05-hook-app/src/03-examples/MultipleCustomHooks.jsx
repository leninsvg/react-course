import {useCounter, useFetch} from "../hooks/index.js";
import {LoadingMessage} from "./LoadingMessage.jsx";
import {PokemonCard} from "./PokemonCard.jsx";

export const MultipleCustomHooks = () => {
    const {counter, increment, decrement} = useCounter(1);
    const {data, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    return (
        <>
            <div>Pokemon info</div>
            <hr/>
            <div>Data</div>
            {isLoading ? <LoadingMessage/>:
                <PokemonCard id={data?.id} name={data?.name}
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                    ]}/>
            }
            <pre>{data?.name}</pre>
            <button onClick={() => counter > 1 ? decrement() : null}
                    className={'btn btn-primary mt-2'}>
                Anterior
            </button>
            <button onClick={() => increment()}
                    className={'btn btn-primary mt-2'}>
                Siguiente
            </button>
        </>

    )
}