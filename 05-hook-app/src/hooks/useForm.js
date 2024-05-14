import {useState} from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const onInputChange = ({target}) => {
        console.log("onInputChange", target.value, target.name);
        setFormState({
            ...formState,
            [target.name]: target.value,
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}