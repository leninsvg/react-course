import PropTypes from 'prop-types';

const getResult = () => {
    return 4 + 4;
}

export const FirstApp = ({title, subTitle, name}) => {

    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <div>{getResult()}</div>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    name: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Lenin Samaniego',
    title: 'No hay ningun titulo',
    subTitle: 'No hay subtitulo'
}
