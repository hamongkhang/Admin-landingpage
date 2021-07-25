import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Button,Modal} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';
import CreateExpense from "./create-expense.component";

  

class Student extends Component{
  constructor(props) {
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeFunction = this.onChangeFunction.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeFacebook = this.onChangeFacebook.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteExpense=this.deleteExpense.bind(this);

    this.onChangeNameUpdate = this.onChangeNameUpdate.bind(this);
    this.onChangeFunctionUpdate = this.onChangeFunctionUpdate.bind(this);
    this.onChangeEmailUpdate = this.onChangeEmailUpdate.bind(this);
    this.onChangePhoneUpdate = this.onChangePhoneUpdate.bind(this);
    this.onChangeFacebookUpdate = this.onChangeFacebookUpdate.bind(this);
    this.onSubmitUpdate = this.onSubmitUpdate.bind(this);
    this.handleChangeUpdate = this.handleChangeUpdate.bind(this);

    this.state = {
      show:false  ,
      show2:false,
      students: [],
      name: '',
      function:'',
      email:'',
      facebook:'',
      phone: '',
      image : '',
      nameupdate: '',
      functionupdate:'',
      emailupdate:'',
      facebookupdate:'',
      phoneupdate: '',
      imageupdate : '',
      update:0
    };
  }
  handleModal(){  
    this.setState({show:!this.state.show})  
  }   
  handleModal2(id){  
    this.setState({show2:!this.state.show2,update:id})  
    console.log(this.state.update);
  }   
  componentDidMount() {
    axios.get('http://localhost:4000/api/students/')
      .then(res => {
        this.setState({
            students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }



///////////////////////////////////////////////////

handleChange(e)
{
  this.setState({ 
    image:  e.target.files[0],
  })
  console.log(this.state.image)
}
onChangeName(e) {
  this.setState({name: e.target.value})
}
onChangeFunction(e) {
    this.setState({function: e.target.value})
  }
  onChangeEmail(e) {
    this.setState({email: e.target.value})
  }
  onChangePhone(e) {
    this.setState({phone: e.target.value})
  }
  onChangeFacebook(e) {
    this.setState({facebook: e.target.value})
  }


handleChangeUpdate(e)
{
  this.setState({ 
    imageupdate:  e.target.files[0],
  })
  console.log(this.state.image)
}
onChangeNameUpdate(e) {
  this.setState({nameupdate: e.target.value})
}
onChangeFunctionUpdate(e) {
    this.setState({functionupdate: e.target.value})
  }
  onChangeEmailUpdate(e) {
    this.setState({emailupdate: e.target.value})
  }
  onChangePhoneUpdate(e) {
    this.setState({phoneupdate: e.target.value})
  }
  onChangeFacebookUpdate(e) {
    this.setState({facebookupdate: e.target.value})
  }

onSubmitUpdate(e) {  e.preventDefault();

  const expense = new FormData(); 
   expense.append( 
    "image",
   this.state.imageupdate
  ); 
  expense.append( 
    "name",
   this.state.nameupdate
  ); 
  expense.append( 
    "function",
   this.state.functionupdate
  ); 

  console.log(expense);
  console.log(this.state.update);
  axios.post('http://localhost:4000/api/students/' + this.state.update, expense)
      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
  Swal.fire(
'Good job!',
'Please check database',
)
history.back();

}

onSubmit(e) {  e.preventDefault();

  const expense = new FormData(); 
  expense.append( 
    "name",
   this.state.name
  ); 
  expense.append( 
    "function",
   this.state.function
  ); 
  expense.append( 
    "image",
   this.state.image
  ); 
  console.log(expense);
  axios.post('http://localhost:4000/api/students', expense)
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
history.back();

}
deleteExpense(id){
  if (window.confirm("Are you sure?")) {
    axios.delete('http://localhost:4000/api/students/'+id)
    .then((res) => {
      console.log(res.data)
    }).catch((error) => {
        console.log(error)
    })
    history.back();
  }
  
}

    render(){
        return(
<Router>  
         <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Share of PNV</h4>
                  <p className="card-description">
                  <button className="addbutton" onClick={()=>this.handleModal()}>Add</button>
                  </p>
                 
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                      <tr>
                          <th>
                            Id
                          </th>
                          <th>
                           Image
                          </th>
                          <th>
                            Name
                          </th>
                          <th>
                            Message
                          </th>
                          <th>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.students.map((student, i) => {
    return(
     
      <tr>
         <td className="py-1">
       {i}
      </td>
      <td className="py-1">
      <img className="image" src={"assets/img/"+student.student_image} height={200} width={250} />
      </td>
      <td className="py-1">
      <p className="testtitle">{student.student_name}</p>
      </td>
      <td className="py-1">
      <p className="testcontent">{student.student_mess}</p>
      </td>
      <td className="py-1">
      <button className="editbutton" onClick={()=>this.handleModal2(student.id)}>Edit</button>
      <button type="submit" onClick={()=>this.deleteExpense(student.id)} className="deletebutton">Delete</button>
  

      </td>
    </tr>
    
    )})}
     {this.state.students.map((student, i) => {
       if(student.id===this.state.update){
    return(    <Modal show={this.state.show2} onHide={()=>this.handleModal2()}>  
    <Modal.Header closeButton>Edit Student</Modal.Header>  
    <Modal.Body>
    <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">

          <Form onSubmit={this.onSubmitUpdate} encType="multipart/form-data">
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder={student.student_name} onChange={this.onChangeNameUpdate}/>
       </Form.Group>
      </Col>
  </Row>
  <label for="image">Image Upload:</label>
          <input onChange={this.handleChangeUpdate} type="file" id="image" ref="productimage" />
          
          <img className="image" src={"assets/img/"+student.student_image} height={100} width={100} />
          <label for="image">Old image:</label>
      
  <Form.Group controlId="email">
  <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" type="textarea" placeholder={student.student_mess} onChange={this.onChangeFunctionUpdate}/>
  </Form.Group>
 
  <Button variant="primary" size="lg" block="block" type="submit">Submit</Button>
</Form>
          </div>
        </div>
      </div>
      </Modal.Body>  
    <Modal.Footer>  
      <Button onClick={()=>this.handleModal2()}>Close</Button>   
    </Modal.Footer>  
  </Modal> 
)}})}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /////////////////////////////////////////////////////////////////////////////// */}
            <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
          <Modal.Header closeButton>Write new Student</Modal.Header>  
          <Modal.Body>
          <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">

                <Form onSubmit={this.onSubmit} encType="multipart/form-data">
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={this.state.name} onChange={this.onChangeName}/>
             </Form.Group>
            </Col>
        </Row>
        <label for="image">Image Upload:</label>
                <input onChange={this.handleChange} type="file" id="image" ref="productimage" />

    
        <Form.Group controlId="email">
  <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" type="textarea" value={this.state.function} onChange={this.onChangeFunction}/>
  </Form.Group>
 
        
       
        <Button variant="primary" size="lg" block="block" type="submit">Submit</Button>
      </Form>
                </div>
              </div>
            </div>
            </Modal.Body>  
          <Modal.Footer>  
            <Button onClick={()=>this.handleModal()}>Close</Button>   
          </Modal.Footer>  
        </Modal> 
{/* //////////////////////////////////////////////////////////////////////////////////////////// */}


            </Router>
      );
    }
}
export default Student;




