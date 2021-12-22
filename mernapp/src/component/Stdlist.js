import axios from 'axios';
// import { Button } from 'bootstrap';
import React from 'react'
import { Table } from 'react-bootstrap'
import List from '../component/list'


class Stdlist extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      listItem: [],
    }
   
  }


  componentDidMount() {
    axios.get('students/list/')
      .then(res => {
        this.setState({
          listItem: res.data
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }


  DataTable() {
    return this.state.listItem.map((res, i) => {
      return <List obj={res} keyy={i} />;
    });
  }

  render() {
    return (
      <>
        <h1>this is Stdlist page</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email </th>
              <th scope="col">Work</th>
              <th scope="col">Phone #</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {this.DataTable()}


            {/* <tr>
              <th scope="row">{this.state.listItem.map((nam, i) => (<p>{i+1}</p>))}</th>
              <td>{this.state.listItem.map((nam) => (<p>{nam.name}</p>))}</td>
              <td>{this.state.listItem.map((nam) => (<p>{nam.email}</p>))}</td>
              <td>{this.state.listItem.map((nam) => (<p>{nam.work}</p>))}</td>
              <td>{this.state.listItem.map((nam) => (<p>{nam.phone}</p>))}</td>
              <td>{this.state.listItem.map((nam) => (<p><button onClick={() => this.onUpdate(nam._id)}>Update</button></p>))}</td>
              <td>{this.state.listItem.map((nam) => (<p><button onClick={() => this.onDelete(nam._id)}>Delete</button></p>))}</td>
            </tr> */}

          </tbody>
        </Table>
      </>
    )
  }
}

export default Stdlist;