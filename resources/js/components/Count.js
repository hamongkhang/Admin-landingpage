import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Button,Modal} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';


  

class Count extends Component{
  constructor(props) {
    super(props)
    this.onChangeCount1 = this.onChangeCount1.bind(this);
    this.onChangeCount2 = this.onChangeCount2.bind(this);
    this.onChangeCount3 = this.onChangeCount3.bind(this);
    this.onChangeCount4 = this.onChangeCount4.bind(this);
    this.onChangeCount5= this.onChangeCount5.bind(this);
    this.onChangeCount6 = this.onChangeCount6.bind(this);
    this.onChangeCount7 = this.onChangeCount7.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteExpense=this.deleteExpense.bind(this);

    this.onChangeCount1Update = this.onChangeCount1Update.bind(this);
    this.onChangeCount2Update = this.onChangeCount2Update.bind(this);
    this.onChangeCount3Update = this.onChangeCount3Update.bind(this);
    this.onChangeCount4Update = this.onChangeCount4Update.bind(this);
    this.onChangeCount5Update = this.onChangeCount5Update.bind(this);
    this.onChangeCount6Update = this.onChangeCount6Update.bind(this);
    this.onChangeCount7Update = this.onChangeCount7Update.bind(this);
    this.onSubmitUpdate = this.onSubmitUpdate.bind(this);

    this.state = {
      show:false  ,
      show2:false,
      count: [],
      update:0,
      count_1:'',
      count_2:'',
      count_3:'',
      count_4:'',
      count_5:'',
      count_6:'',
      count_7:'',
      count_1Update:'',
      count_2Update:'',
      count_3Update:'',
      count_4Update:'',
      count_5Update:'',
      count_6Update:'',
      count_7Update:'',
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
    axios.get('http://localhost:4000/api/count/')
      .then(res => {
        this.setState({
            count: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }



///////////////////////////////////////////////////



onChangeCount1(e) {
  this.setState({count_1: e.target.value})
}
onChangeCount2(e) {
    this.setState({count_2: e.target.value})
  }
  onChangeCount3(e) {
    this.setState({count_3: e.target.value})
  }
  onChangeCount4(e) {
    this.setState({count_4: e.target.value})
  }
  onChangeCount5(e) {
    this.setState({count_5: e.target.value})
  }
  onChangeCount6(e) {
    this.setState({count_6: e.target.value})
  }
  onChangeCount7(e) {
    this.setState({count_7: e.target.value})
  }
  onChangeCount1Update(e) {
    this.setState({count_1Update: e.target.value})
  }
  onChangeCount2Update(e) {
      this.setState({count_2Update: e.target.value})
    }
    onChangeCount3Update(e) {
      this.setState({count_3Update: e.target.value})
    }
    onChangeCount4Update(e) {
      this.setState({count_4Update: e.target.value})
    }
    onChangeCount5Update(e) {
      this.setState({count_5Update: e.target.value})
    }
    onChangeCount6Update(e) {
      this.setState({count_6Update: e.target.value})
    }
    onChangeCount7Update(e) {
      this.setState({count_7Update: e.target.value})
    }
  



onSubmit(e) {  e.preventDefault();

  const expense = new FormData(); 
  expense.append( 
    "count_1",
   this.state.count_1
  ); 
  expense.append( 
    "count_2",
   this.state.count_2
  ); 
  expense.append( 
    "count_3",
   this.state.count_3
  ); 
  expense.append( 
    "count_4",
   this.state.count_4
  ); 
  expense.append( 
    "count_5",
   this.state.count_5
  ); 
  expense.append( 
    "count_6",
   this.state.count_6
  ); 
  expense.append( 
    "count_7",
   this.state.count_7
  ); 

  console.log(expense);
  axios.post('http://localhost:4000/api/count', expense)
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

onSubmitUpdate(e) {  e.preventDefault();

  const expense = new FormData(); 
  expense.append( 
    "count_1",
   this.state.count_1Update
  ); 
  expense.append( 
    "count_2",
   this.state.count_2Update
  ); 
  expense.append( 
    "count_3",
   this.state.count_3Update
  ); 
  expense.append( 
    "count_4",
   this.state.count_4Update
  ); 
  expense.append( 
    "count_5",
   this.state.count_5Update
  ); 
  expense.append( 
    "count_6",
   this.state.count_6Update
  ); 
  expense.append( 
    "count_7",
   this.state.count_7Update
  ); 

  console.log(expense);
  axios.post('http://localhost:4000/api/count/' + this.state.update, expense)
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
deleteExpense(id){
  if (window.confirm("Are you sure?")) {
    axios.delete('http://localhost:4000/api/count/'+id)
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
                  <h4 className="card-title">Qúa trình tuyển sinh</h4>
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
                            Sinh viên
                          </th>
                          <th>
                            Cựu sinh viên
                          </th>
                          <th>
                            Lương trung bình
                          </th>
                          <th>
                            Người hưởng lợi
                          </th>
                          <th>
                            Có việc làm
                          </th>
                          <th>
                            Cựu sinh viên
                          </th>
                          <th>
                            Gia đình
                          </th>
                          <th>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.count.map((co, i) => {
    return(
     
      <tr>
         <td className="py-1">
       {i}
      </td>
      <td className="py-1">
      <p>{co.count_1}</p>
      </td>
      <td className="py-1">
      <p>{co.count_2}</p>
      </td>
      <td className="py-1">
      <p>{co.count_3}</p>
      </td>
      <td className="py-1">
      <p>{co.count_4}</p>
      </td>
      <td className="py-1">
      <p>{co.count_5}</p>
      </td>
      <td className="py-1">
      <p>{co.count_6}</p>
      </td>
      <td className="py-1">
      <p>{co.count_7}</p>
      </td>
      <td className="py-1">
      <button className="editbutton" onClick={()=>this.handleModal2(co.id)}>Edit</button>
      <button type="submit" onClick={()=>this.deleteExpense(co.id)} className="deletebutton">Delete</button>
  

      </td>
    </tr>
    
    )})}
     {this.state.count.map((co, i) => {
       if(co.id===this.state.update){
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
          <Form.Label>Sinh viên nghèo</Form.Label>
          <Form.Control type="number" placeholder={co.count_1} onChange={this.onChangeCount1Update}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Cựu sinh viên</Form.Label>
          <Form.Control type="number" placeholder={co.count_2} onChange={this.onChangeCount2Update}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Mức lương trung bình</Form.Label>
          <Form.Control type="number" placeholder={co.count_3} onChange={this.onChangeCount3Update}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Người hưởng lợi gián tiếp</Form.Label>
          <Form.Control type="number" placeholder={co.count_4} onChange={this.onChangeCount4Update}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Sinh viên có việc làm</Form.Label>
          <Form.Control type="number" placeholder={co.count_5} onChange={this.onChangeCount5Update}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Cựu sinh viên ngành IT</Form.Label>
          <Form.Control type="number" placeholder={co.count_6} onChange={this.onChangeCount6Update}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Hỗ trợ giua đình</Form.Label>
          <Form.Control type="number" placeholder={co.count_7} onChange={this.onChangeCount7Update}/>
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
       <Form.Label>Sinh viên nghèo</Form.Label>
          <Form.Control type="number" alue={this.state.count_1} onChange={this.onChangeCount1}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Cựu sinh viên</Form.Label>
          <Form.Control type="number" alue={this.state.count_2} onChange={this.onChangeCount2}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
       <Form.Label>Mức lương trung bình</Form.Label>
          <Form.Control type="number" alue={this.state.count_3} onChange={this.onChangeCount3}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
       <Form.Label>Người hưởng lợi gián tiếp</Form.Label>
          <Form.Control type="number" alue={this.state.count_4} onChange={this.onChangeCount4}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
       <Form.Label>Sinh viên có việc làm</Form.Label>
          <Form.Control type="number" alue={this.state.count_5} onChange={this.onChangeCount5}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
       <Form.Label>Cự sinh viên ngành IT</Form.Label>
          <Form.Control type="number" alue={this.state.count_6} onChange={this.onChangeCount6}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
       <Form.Label>Hỗ trợ giua đình</Form.Label>
          <Form.Control type="number" alue={this.state.count_7} onChange={this.onChangeCount7}/>
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
export default Count;




