import axios from 'axios';


const baseUrl = process.env.REACT_APP_SERVER_URL;
const client_id = process.env.REACT_APP_CLIENT_ID;



export const registrationCall = async (email, password, dispatch) => {


    // Dispatch Login Start Action
    dispatch({ type: 'LOGIN_START' });

    try {
        // Try to Register User
        const tokenRes = await axios.post(baseUrl + "/users",
            {
                "email": email,
                "password": password,
                "client_id": client_id
            }
        );

        // Try to get User
        const userRes = await axios.get(baseUrl + `/users/me`,
            {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${tokenRes.data.access_token}`
                }
            }
        );


        // Dispatch Success action with user and token
        dispatch({ type: "LOGIN_SUCCESS", user: userRes.data, token: tokenRes.data.access_token });

    } catch (err) {
        // Dispatch Failure Action with error as payload
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};