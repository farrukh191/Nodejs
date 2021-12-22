import React, { useEffect, useState } from 'react';
import '../App.css'
import { useHistory } from 'react-router-dom';

function Contact(props) {
    const history = useHistory();
    const [userData, setuserData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const contactfunc = async () => {


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
            setuserData({ ...userData, name: data.name, email: data.email, phone: data.phone });
            console.log(data);

            if (res.status === 200) {
                const error = new Error(res.error);
                throw error;
                console.log(res);
                //history.push('/login');
            }
            else {
                history.push('/login');
            }

        } catch (error) {
            console.log(error);
            //history.push('/login');
        }
    }

    useEffect(() => {
        contactfunc();
    }, []);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setuserData({ ...userData, [name]: value });
    }

    const clicksubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = userData;
        const res = await fetch('http://localhost:5000/contac', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                name,
                email,
                phone,
                message
            })
        });

        const data = await res.json();
        console.log(data);
        if (!data) {
            console.log('message not found');
        }
        else {
            console.log('message sent');
            setuserData({ ...userData, message: "" });
        }
    }
    return (
        <div class="container contact-form">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
            </div>
            <form method="POST">
                <h3>Drop Us a Message</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" placeholder="Your Name *" value={userData.name} onChange={handleInput} />
                        </div>
                        <div class="form-group">
                            <input type="text" name="email" class="form-control" placeholder="Your Email *" value={userData.email} onChange={handleInput} />
                        </div>
                        <div class="form-group">
                            <input type="text" name="phone" class="form-control" placeholder="Your Phone Number *" value={userData.phone} onChange={handleInput} />
                        </div>
                        <div class="form-group">
                            <textarea name="message" class="form-control" placeholder="Your Message *" className="msg" value={userData.message} onChange={handleInput}></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="submit" name="submit" onClick={clicksubmit} class="btnContact" />
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;