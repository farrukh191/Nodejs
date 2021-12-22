import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../App.css'

const Signup = () => {

	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		work: "",
		password: "",
		cpassword: ""
	});

	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("user created", user);
		axios.post("http://localhost:5000/register", user)
			.then(res => console.log(res.data));
		setUser({
			name: "",
			email: "",
			phone: "",
			work: "",
			password: "",
			cpassword: ""
		});
	};

	return (
		<div className="body">
			<div className="signup-form">
				<form onSubmit={handleSubmit}>
					<h2>Sign Up</h2>
					<p>Please fill in this form to create an account!</p>
					<hr />
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-user"></span>
								</span>
							</div>
							<input type="text" className="form-control" name="name" onChange={handleChange} value={user.name} placeholder="Username" />
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-paper-plane"></i>
								</span>
							</div>
							<input type="email" className="form-control" name="email" onChange={handleChange} value={user.email} placeholder="Email Address" />
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-user"></span>
								</span>
							</div>
							<input type="text" className="form-control" name="phone" onChange={handleChange} value={user.phone} placeholder="phone" />
						</div>
					</div>

					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-user"></span>
								</span>
							</div>
							<input type="text" className="form-control" onChange={handleChange} value={user.work} name="work" placeholder="Work" />
						</div>
					</div>

					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock"></i>
								</span>
							</div>
							<input type="text" className="form-control" name="password" onChange={handleChange} value={user.password} placeholder="Password" />
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock"></i>
									<i className="fa fa-check"></i>
								</span>
							</div>
							<input type="text" className="form-control" name="cpassword" onChange={handleChange} value={user.cpassword} placeholder="Confirm Password" />
						</div>
					</div>

					<div className="form-group">
						<button className="btn btn-primary btn-lg">Sign Up</button>
					</div>
				</form>
				<div className="text-center">Already have an account? <Link to="/Signup">Login here</Link></div>
			</div>

		</div>
	);
}

export default Signup;


