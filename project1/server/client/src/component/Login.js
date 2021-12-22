import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { userContetext } from '../App';
axios.defaults.withCredentials = true;


const Login = () => {

    const { state, dispatch } = useContext(userContetext);

    const history = useHistory();

    const [lgin, setlogin] = useState({
        email: "",
        password: ""
    });


    const loginclick = (event) => {
        setlogin({ ...lgin, [event.target.name]: event.target.value });
    }


    // const handlesubmit =(event)=>{
    //     event.preventDefault();
    //     axios.post("http://localhost:5000/contact",lgin,{withCredentials:true})
    //     .then(res => console.log(res.data));
    // }

    const handlesubmit = async (event) => {
        event.preventDefault();
        const res = await fetch("http://localhost:5000/contact", {
            withCredentials: true,
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(lgin)
        });

        const data = res.json();

        if (res.status === 400 || !data) {
            alert('please form properly');
            history.push('/login');
        } else {

            // ye dispatch state ki value change krne k liye use krhe h jb login hoga to true hoga
            //  means login hone k bad logout btn nzr ayega
            dispatch({ type: "USER", payload: true });
            //------------------------------
            alert('successfully login');
            history.push('/');
        }
    }

    return (
        <div className="body">
            <div className="signup-form" >
                <form onSubmit={handlesubmit} method="POST" className="loginform" >
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account!</p>
                    <hr />

                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-paper-plane"></i>
                                </span>
                            </div>
                            <input type="email" className="form-control" name="email" onChange={loginclick} value={lgin.email} placeholder="Email Address" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="password" onChange={loginclick} value={lgin.password} placeholder="Password" />
                        </div>
                    </div>


                    <div className="form-group">
                        <button className="btn btn-primary btn-lg">SignIn</button>
                    </div>
                </form>
                <div className="text-center">Already have an account? </div>  Login
            </div>

        </div>
    );
}

export default Login;

