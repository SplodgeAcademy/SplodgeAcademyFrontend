import axios from 'axios';


const baseUrl = process.env.REACT_APP_SERVER_URL;
const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;


export const logOutCall = async (token, dispatch) => {
    
    try {
        // Try to Log User Out
        await axios.post(baseUrl + "/oauth/revoke",
            {
                "token": token,
                "client_id": client_id,
                "client_secret": client_secret
            },
            { headers: { "Content-Type": 'application/json' } }
        );

        // Dispatch Logout action
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.reload();

    } catch (err) {
        console.log(err)
    }
};