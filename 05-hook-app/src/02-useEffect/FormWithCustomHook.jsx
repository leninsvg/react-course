import {useEffect} from "react";
import {useForm} from "../hooks/useForm.js";

export const FormWithCustomHook = () => {
    const {formState, onInputChange, onResetForm} = useForm( {
        username: '',
        email: '',
        password: ''
    })
    const {username, email, password} = formState;

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
            <input type="password" className="form-control mt-2"
                   placeholder="password" name="password"
                   onChange={onInputChange}
                   value={password}/>
            <button onClick={onResetForm} className={'btn btn-primary mt-2'}>Reset</button>

        </>
    )
}