import axios from 'axios';


const baseUrl = process.env.REACT_APP_SERVER_URL;


export const updateUserInfoCall = async ( token, infoToChange, dispatch) => {

    console.log(infoToChange);

    try {
        // Try to update user info
        const infoRes = await axios.put(baseUrl + `/users/updateInfo`, 
            {   
                "level": infoToChange
            },
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );

        console.log(infoRes);

        localStorage.setItem('user', JSON.stringify(infoRes.data));

        // Dispatch Success action with user
        dispatch({ type: "USER_UPDATE", payload: infoRes.data });
        
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
};