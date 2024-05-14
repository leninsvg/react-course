import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'leninsvg',
        email: 'lenin@google.com',
    });
    const onInputChange = ({target}) => {
        console.log("onInputChange", target.value, target.name);
        setFormState({
            ...formState,
            [target.name]: target.value,
        })
    }
    const {username, email} = formState;
    /**
     * [] solo se dispara una vez cuando el documento se inicializa
     */
    useEffect(() => {
        console.log('useEffect callback');
    }, []);
    /**
     * [formState] solo se dispara cuando cambia el formulario
     */
    useEffect(() => {
        console.log('useEffect formState');
    }, [formState]);
    /**
     * [email] solo se dispara cuando  cambia el email
     */
    useEffect(() => {
        console.log('useEffect emailChange');
    }, [email]);
    return (
        <>
            <h1>Formulario simple</h1>
            <hr/>
            <input type="text" className="form-control"
                   placeholder="Username" name="username"
                   onChange={onInputChange}
                   value={username}/>
            <input type="email" className="form-control mt-2"
                   placeholder="lenin@google.com" name="email"
                   onChange={onInputChange}
                   value={email}/>
            {
                username === 'leninsvg' && <Message></Message>
            }

        </>
    )
}