
import React, { Component } from 'react'
import { Form, Row, Col, Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './style.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', name: '', age: '', address: '', phoneNo: '', password: '', cpassword: '', work: '', posts: [], }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount = async () => {
    const resp = await axios.get("/list");
    console.log(resp);
    this.setState({ posts: resp.data });

  }



  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        age: this.state.age,
        work: this.state.work,
        password: this.state.password,
        cpassword: this.state.cpassword,
        phone: this.state.phoneNo,
        address: this.state.address,
      }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onDelete = async (dltid) => {
    const resp1 = await axios.delete(`/delete/${dltid}`).then((res) => {
      console.log('Student successfully deleted!')
    }).catch((error) => {
      console.log(error)
    })
    console.log(resp1);
  }

  onUpdate = async (updid) => {
    console.log(`Student successfully deleted! ${updid}`);
   
    // const resp2 = await axios.put(`/update/${updid}`).then((res) => {
    //   console.log(`Student successfully deleted! ${updid}`);
    // }).catch((error) => {
    //   console.log(error)
    // })
    
    // console.log(resp2);
  }


  // onUpdate = async (updid) => {
  //   const resp2 = await axios.put(`/update/${updid}`).then((res) => {
  //     console.log('Student successfully deleted!')
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  //   console.log(resp2);
  // //   // const studentObject = {
  // //   //   name: this.state.name,
  // //   //   email: this.state.email,
  // //   //   rollno: this.state.rollno
  // //   // };
  // //  await axios.put(`/update:${updid}`)
  // //       .then((res) => {
  // //         console.log(res.data)
  // //         console.log('Student successfully updated')
  // //       }).catch((error) => {
  // //         console.log(error)
  // //       })
  
  // //     // Redirect to Student List 
  // //     //this.props.history.push('/student-list')
  //   }
  






  render() {




    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Form onSubmit={this.handleSubmit} >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name" name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name='cpassword' placeholder='Confirm password' value={this.state.cpassword} onChange={this.handleChange} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address </Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" name='address' value={this.state.address} onChange={this.handleChange} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Phone #</Form.Label>
              <Form.Control name='phoneNo' placeholder='Phone No' value={this.state.phoneNo} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Work</Form.Label>
              <Form.Control name='work' placeholder='Work' value={this.state.work} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" name='age' placeholder='Age' value={this.state.age} onChange={this.handleChange} />
            </Form.Group>
          </Row>


          <button className="btn btn-primary" type="submit">Create Account</button>
        </Form>


        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email </th>
              <th scope="col">Work</th>
              <th scope="col">Phone #</th>
              <th scope="col">Address</th>
              <th scope="col">Pass</th>
              <th scope="col">Cpass</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{this.state.posts.map((nam) => (<p>1</p>))}</th>
              <td>{this.state.posts.map((nam) => (<p>{nam.name}</p>))}</td>
              <td>{this.state.posts.map((nam) => (<p>{nam.email}</p>))}</td>
              <td>{this.state.posts.map((nam) => (<p>{nam.work}</p>))}</td>
              <td>{this.state.posts.map((nam) => (<p>{nam.phone}</p>))}</td>
              <td>{this.state.posts.map((nam) => (<p>{nam.address}</p>))}</td>
              <td>{this.state.posts.map((nam) => (<p>{nam.password}</p>))}</td>
              <td>{this.state.posts.map((nam) => (<p>{nam.cpassword}</p>))}</td>
              <td>{this.state.posts.map((nam) => (<p><button onClick={() => this.onUpdate(nam._id)}>Update</button></p>))}</td>
              <td>{this.state.posts.map((nam) => (<p><button onClick={() => this.onDelete(nam._id)}>Delete</button></p>))}</td>
            </tr>

          </tbody>
        </table>




      </div>



    )
  }
}

export default App;
