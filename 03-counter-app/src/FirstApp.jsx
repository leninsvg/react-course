// const newMessage = {
//     message: 'Hola mundo',
//     title: 'Lenin'
// };

import PropTypes from 'prop-types';

const getResult = () => {
    return 4 + 4;
}

// eslint-disable-next-line react/prop-types
export const FirstApp = (
    {
        title = 'Hola soy lenin',
        subTitle = 'Subtitle',
        name
    }) => {
    return (<>
        <h1>{name} - {title}</h1>
        {getResult()}
        {/*<code>{JSON.stringify(newMessage)}</code>*/}
        <h1>Lenin</h1><p>{subTitle}</p>
    </>)
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
    name: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Lenin Samaniego',
    title: 'No hay ningun titulo',
    subTitle: 'No hay subtitulo'
}
