import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ExpenseTableRow from './ExpenseTableRow';


export default class ExpenseList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      expenses: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/expenses/')
      .then(res => {
        this.setState({
          expenses: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.expenses.map((res, i) => {
      return <ExpenseTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper"> 
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
            <th>Action</th>
            <a class="btn btn-primary" href="/pdf">Export to PDF</a>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}