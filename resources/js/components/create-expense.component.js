import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import ExpensesList from './expenses-listing.component';
import Swal from 'sweetalert2';


export default class CreateExpense extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
    this.onChangeExpenseEmail = this.onChangeExpenseEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // Setting up state

    this.state = {
      name: '',
      email: '',
      image : ''
    }
  }
  handleChange(e)
  {
    this.setState({ 
      image:  e.target.files[0],
    })
    console.log(this.state.image)
  }
  onChangeExpenseName(e) {
    this.setState({name: e.target.value})
  }


  onChangeExpenseEmail(e) {
    this.setState({email: e.target.value})
  }

  onSubmit(e) {

    e.preventDefault();
    const expense = new FormData(); 
     expense.append( 
      "image",
     this.state.image
    ); 
    expense.append( 
      "name",
     this.state.name
    ); 
    expense.append( 
      "email",
     this.state.email
    ); 
    console.log(expense);
    axios.post('http://localhost:4000/api/expenses', expense)
      .then(res => console.log(res.data));
    // console.log(`Expense successfully created!`);
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Amount: ${this.state.amount}`);
    // console.log(`Description: ${this.state.description}`);
    Swal.fire(
  'Good job!',
  'Expense Added Successfully',
  'success'
)

    this.setState({name: '', email: '',image:''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit} encType="multipart/form-data">
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={this.state.name} onChange={this.onChangeExpenseName}/>
             </Form.Group>
            
            </Col>
            
           
           
        </Row>
        <label for="image">Image Upload:</label>
                <input onChange={this.handleChange} type="file" id="image" ref="productimage" />

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
                <Form.Control as="textarea" type="textarea" value={this.state.email} onChange={this.onChangeExpenseEmail}/>
        </Form.Group>

       
        <Button variant="primary" size="lg" block="block" type="submit">Submit</Button>
      </Form>
      <br></br>
      <br></br>

      <ExpensesList> </ExpensesList>
    </div>);
  }
}
