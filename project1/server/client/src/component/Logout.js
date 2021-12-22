import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userContetext } from '../App';

const Logout = () => {


    const { state, dispatch } = useContext(userContetext);
    // we use promimse not async await

    const history = useHistory();
    useEffect(() => {
        fetch("http://localhost:5000/logout", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then((res) => {
            // ye dispatch state ki value change krne k liye use krhe h jb logout hoga to false hoga
            //  means logout hone k bad login btn nzr ayega
            dispatch({ type: "USER", payload: false });
            //------------------------------------------

            // replace : true means pakka hi login page m isko bhejo ye reactjs m new update aya howa h
            history.push('/login', { replace: true });
            if (res.status != 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    })
    return (
        <>
            <h2>Hy this is logout page</h2>
        </>
    );
}

export default Logout;