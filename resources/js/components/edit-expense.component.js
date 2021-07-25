import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditExpense extends Component {

  constructor(props) {
    super(props)

    this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
    this.onChangeExpenseEmail = this.onChangeExpenseEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
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
  componentDidMount() {
    axios.get('http://localhost:4000/api/expenses/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          image: res.data.image
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeExpenseName(e) {
    this.setState({ name: e.target.value })
    console.log(this.state.name)
  }

  onChangeExpenseEmail(e) {
    this.setState({email: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    const expenseObject = new FormData(); 
    expenseObject.append( 
     "image",
    this.state.image
   ); 
   expenseObject.append( 
     "name",
    this.state.name
   ); 
   expenseObject.append( 
     "email",
    this.state.email
   ); 
console.log(expenseObject);
    axios.post('http://localhost:4000/api/expenses/' + this.props.match.params.id, expenseObject)
      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Expense List 
   
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit} encType="multipart/form-data">
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeExpenseName} />
        </Form.Group>

        <label for="image">Image Upload:</label>
                <input onChange={this.handleChange} type="file" id="image" ref="productimage" />

          <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
                <Form.Control as="textarea" type="textarea" value={this.state.email} onChange={this.onChangeExpenseEmail}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Expense
        </Button>
      </Form>
    </div>);
  }
}