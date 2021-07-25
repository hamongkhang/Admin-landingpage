import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Button,Modal} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';


  

class Milestone extends Component{
  constructor(props) {
    super(props)
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteExpense=this.deleteExpense.bind(this);

    this.onChangeTitleUpdate = this.onChangeTitleUpdate.bind(this);
    this.onChangeContentUpdate = this.onChangeContentUpdate.bind(this);
    this.onSubmitUpdate = this.onSubmitUpdate.bind(this);

    this.state = {
      show:false  ,
      show2:false,
      milestones: [],
      title: '',
      titleupdate:'',
      contentupdate:'',
      content: '',
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
    axios.get('http://localhost:4000/api/milestones/')
      .then(res => {
        this.setState({
          milestones: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }



///////////////////////////////////////////////////

onChangeContent(e) {
  this.setState({content: e.target.value})
}


onChangeTitle(e) {
  this.setState({title: e.target.value})
}

onChangeContentUpdate(e) {
  this.setState({contentupdate: e.target.value})
}


onChangeTitleUpdate(e) {
  this.setState({titleupdate: e.target.value})
  console.log(this.state.titleupdate)
}

onSubmitUpdate(e) {  e.preventDefault();

  const expense = new FormData(); 
  expense.append( 
    "title",
   this.state.titleupdate
  ); 
  expense.append( 
    "content",
   this.state.contentupdate
  ); 
  console.log(expense);
  console.log(this.state.update);
  axios.post('http://localhost:4000/api/milestones/' + this.state.update, expense)
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

  this.setState({contentupdate: '', titleupdate: ''})
}

onSubmit(e) {  e.preventDefault();

  const expense = new FormData(); 
  expense.append( 
    "title",
   this.state.title
  ); 
  expense.append( 
    "content",
   this.state.content
  ); 
  console.log(expense);
  axios.post('http://localhost:4000/api/milestones', expense)
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

  this.setState({content: '', title: ''})
}
deleteExpense(id){
  if (window.confirm("Are you sure?")) {
    axios.delete('http://localhost:4000/api/milestones/'+id)
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
                  <h4 className="card-title">Các cột mốc quan trọng</h4>
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
                           Thời gian
                          </th>
                          <th>
                            Cột mốc quan trọng
                          </th>
                          <th>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.milestones.map((milestone, i) => {
    return(
     
      <tr>
         <td className="py-1">
       {i}
      </td>
      <td className="py-1">
      <p className="testtitle">{milestone.milestone_year}</p>
      </td>
      <td className="py-1">
      <p className="testcontent">{milestone.milestone_content}</p>
      </td>
      <td className="py-1">
      <button className="editbutton" onClick={()=>this.handleModal2(milestone.id)}>Edit</button>
      <button type="submit" onClick={()=>this.deleteExpense(milestone.id)} className="deletebutton">Delete</button>
  

      </td>
    </tr>
    
    )})}
     {this.state.milestones.map((milestone, i) => {
       if(milestone.id===this.state.update){
    return(    <Modal show={this.state.show2} onHide={()=>this.handleModal2()}>  
    <Modal.Header closeButton>Edit background</Modal.Header>  
    <Modal.Body>
    <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">

          <Form onSubmit={this.onSubmitUpdate} encType="multipart/form-data">
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Thời gian</Form.Label>
          <Form.Control type="text" placeholder={milestone.milestone_year} onChange={this.onChangeTitleUpdate}/>
       </Form.Group>
      </Col>
  </Row>
  <Form.Group controlId="email">
    <Form.Label>Nội dung</Form.Label>
          <Form.Control as="textarea" type="textarea" placeholder={milestone.milestone_content} onChange={this.onChangeContentUpdate}/>
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
          <Modal.Header closeButton>Write new background</Modal.Header>  
          <Modal.Body>
          <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">

                <Form onSubmit={this.onSubmit} encType="multipart/form-data">
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Thời gian</Form.Label>
                <Form.Control type="text" value={this.state.title} onChange={this.onChangeTitle}/>
             </Form.Group>
            
            </Col>
            
           
           
        </Row>
       
        <Form.Group controlId="email">
          <Form.Label>Nội dung</Form.Label>
                <Form.Control as="textarea" type="textarea" value={this.state.content} onChange={this.onChangeContent}/>
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
export default Milestone;




