import { createContext, useEffect, useReducer } from 'react';

import AuthReducer from './AuthReducer';
import { CurrentUser } from '../../classes/CurrentUser';



// Initial state when App is first started
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: JSON.parse(localStorage.getItem('token')) || null,
    isFetching: false,
    error: false
};


// Create Context using our Initial State
export const AuthContext = createContext(INITIAL_STATE);



// Creating wrapper for our context
export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    let currentUser = new CurrentUser(state.user);
    console.log(currentUser);

    // Store User and Token in local Storage when changed in state
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('token', JSON.stringify(state.token)); 
    }, [state.user, state.token]);




    // Pass down state to Children(App)
    return (
        <AuthContext.Provider
            value={{
                currentUser: currentUser,
                token: state.token,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}    
        >
            {children}
        </AuthContext.Provider>
    )
};