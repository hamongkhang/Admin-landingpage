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

  

class Staff extends Component{
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
      staffs: [],
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
    axios.get('http://localhost:4000/api/staffs/')
      .then(res => {
        this.setState({
            staffs: res.data
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

onSubmitUpdate(e) {
  e.preventDefault();
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
  expense.append( 
    "email",
   this.state.emailupdate
  ); 
  expense.append( 
    "phone",
   this.state.phoneupdate
  ); 
  expense.append( 
    "facebook",
   this.state.facebookupdate
  ); 

  console.log(expense);
  console.log(this.state.update);
  axios.post('http://localhost:4000/api/staffs/' + this.state.update, expense)
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

onSubmit(e) {
  e.preventDefault();
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
    "email",
   this.state.email
  ); 
  expense.append( 
    "phone",
   this.state.phone
  ); 
  expense.append( 
    "facebook",
   this.state.facebook
  ); 
  expense.append( 
    "image",
   this.state.image
  ); 
  console.log(expense);
  axios.post('http://localhost:4000/api/staffs', expense)
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
    axios.delete('http://localhost:4000/api/staffs/'+id)
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
                  <h4 className="card-title">Staff of PNV</h4>
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
                            Function
                          </th>
                          <th>
                            Email
                          </th>
                          <th>
                            Facebook
                          </th>
                          <th>
                            Phone
                          </th>
                          <th>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.staffs.map((staff, i) => {
    return(
     
      <tr>
         <td className="py-1">
       {i}
      </td>
      <td className="py-1">
      <img className="image" src={"assets/img/"+staff.staff_image} height={200} width={250} />
      </td>
      <td className="py-1">
      <p className="testtitle">{staff.staff_name}</p>
      </td>
      <td className="py-1">
      <p className="testtitle">{staff.staff_function}</p>
      </td>
      <td className="py-1">
      <p className="testtitle">{staff.staff_email}</p>
      </td>
      <td className="py-1">
      <p className="testtitle">{staff.staff_facebook}</p>
      </td>
      <td className="py-1">
      <p className="testtitle">{staff.staff_phone}</p>
      </td>
      <td className="py-1">
      <button className="editbutton" onClick={()=>this.handleModal2(staff.id)}>Edit</button>
      <button type="submit" onClick={()=>this.deleteExpense(staff.id)} className="deletebutton">Delete</button>
  

      </td>
    </tr>
    
    )})}
     {this.state.staffs.map((staff, i) => {
       if(staff.id===this.state.update){
    return(    <Modal show={this.state.show2} onHide={()=>this.handleModal2()}>  
    <Modal.Header closeButton>Edit Staff</Modal.Header>  
    <Modal.Body>
    <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">

          <Form onSubmit={this.onSubmitUpdate} encType="multipart/form-data">
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder={staff.staff_name} onChange={this.onChangeNameUpdate}/>
       </Form.Group>
      </Col>
  </Row>
  <label for="image">Image Upload:</label>
          <input onChange={this.handleChangeUpdate} type="file" id="image" ref="productimage" />
          
          <img className="image" src={"assets/img/"+staff.staff_image} height={100} width={100} />
          <label for="image">Old image:</label>
          <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Function</Form.Label>
          <Form.Control type="text" placeholder={staff.staff_function} onChange={this.onChangeFunctionUpdate}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder={staff.staff_email} onChange={this.onChangeEmailUpdate}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Facebook</Form.Label>
          <Form.Control type="text" placeholder={staff.staff_facebook} onChange={this.onChangeFacebookUpdate}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder={staff.staff_phone} onChange={this.onChangePhoneUpdate}/>
       </Form.Group>
      </Col>
  </Row>
 
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
          <Modal.Header closeButton>Write new background</Modal.Header>  
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

                <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Function</Form.Label>
                <Form.Control type="text" value={this.state.function} onChange={this.onChangeFunction}/>
             </Form.Group>
            </Col>
        </Row>
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail}/>
             </Form.Group>
            </Col>
        </Row>
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Facebook</Form.Label>
                <Form.Control type="text" value={this.state.facebook} onChange={this.onChangeFacebook}/>
             </Form.Group>
            </Col>
        </Row>
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" value={this.state.phone} onChange={this.onChangePhone}/>
             </Form.Group>
            </Col>
        </Row>
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
export default Staff;




