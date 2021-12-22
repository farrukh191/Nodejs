import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Home(props) {

    const [username, setusername] = useState('');
    const [usershow, usersetshow] = useState(false);
    const history = useHistory();

    const homefunc = async () => {


        try {
            const res = await fetch("http://localhost:5000/getdata", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setusername(data.name);
            usersetshow(true)
            console.log(usershow);



            if (res.status === 200) {
                const error = new Error(res.error);
                throw error;
                console.log(res);

            }

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        homefunc();
    }, []);


    return (
        <div className="home-page">
            <div className="home-div">
                <p className="pt-5">WELCOME </p>
                <h2><b>{username}</b></h2>
                <h2>{usershow ? 'happy to see you back' : 'We are the MERN Developer'}</h2>
            </div>
        </div>
    );
}

export default Home;