import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }


deleteStudent = async () => {
    const resp1 = await axios.delete(`students/delete/${this.props.obj._id}`).then((res) => {
      console.log('Student successfully deleted!')
    }).catch((error) => {
      console.log(error)
    })
    console.log(resp1);
  }


    render() {
        return (
            <tr>
                <td>{this.props.keyy}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.work}</td>
                <td>{this.props.obj.phone}</td>
                <td>
                    <Link className="edit-link" to={"/edit/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteStudent} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>

           
        );
    }
}