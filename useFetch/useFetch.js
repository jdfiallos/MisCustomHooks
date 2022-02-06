import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {
  
    const isMounted = useRef(true);
    /* Ref nos ayuda  */

    /* Primero siempre devuelve los valores por defecto, luego manda lo del fetch */
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    /* Se ejecutara la primera vez que se llame. */
    }, []);
    

    useEffect(() => {

        setState({ data: null, loading: true, error: null });
     
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                /* Hace el Set en caso que este montado, por que sino da error. */
                if ( isMounted.current ) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } 
                
            }).catch( () => {
                setState({
                    loading: false,
                    data: null,
                    error: 'No se pudo cargar la info',
                })
            })
        
    }, [url]);
    
    /* El state es como el contenedor de todos los datos. */
    return state;

};


