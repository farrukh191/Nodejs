import React, { Component } from 'react'
import { Form, Row, Col, Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import '../App.css';

class Register extends Component {
  constructor(props) {
    super(props)
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { email: '', name: '', age: '', address: '', phoneNo: '', password: '', cpassword: '', work: ''}
    
   }

   componentDidMount() {
    axios.get('/students/edit/' + this.props.match.params.id)
      .then(res => {
        this.setState({
        
          name: res.data.name,
          email: res.data.email,
          age: res.data.age,
          work: res.data.work,
          password: res.data.password,
          cpassword: res.data.cpassword,
          phoneNo: res.data.phone,
          address: res.data.address,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

   
 


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  

handleSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      work: this.state.work,
      password: this.state.password,
      cpassword: this.state.cpassword,
      phone: this.state.phoneNo,
      address: this.state.address,
    };

    axios.put('students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/list')
  }




  render() {

console.log(this.props);


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


          <button className="btn btn-primary" type="submit">Update Account</button>
        </Form>


        



      </div>



    )
  }
}

export default Register;









