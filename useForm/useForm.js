import { useState } from 'react';

export const useForm = ( initialState = {} ) => {
  
    /* Custom hook que se va a encargar de usar los formularios. */
    const [values, setValues] = useState(initialState);

    const reset = ( ) => {
        setValues(initialState)
    };

    const handleInputChange = ({ target }) => {

        /* Cadad vez que hay un el caja de texto */
        /* Devuelve un objeto, con el nombre y su valor. */
        setValues({
            ...values,
            /* Damos el valor del valor al nombre. */
            [ target.name ]: target.value
        });

    };

    return [ values, handleInputChange, reset ];

};
