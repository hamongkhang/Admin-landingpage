import React,{Component} from 'react';
import axios from 'axios';
import BackgroundItem from "./BackgroundItem";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Button,Modal} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';
class Background extends Component{
  constructor(props) {
    super(props)
    this.onChangeTitleUpdate = this.onChangeTitleUpdate.bind(this);
    this.onChangeContentUpdate = this.onChangeContentUpdate.bind(this);
    this.onSubmitUpdate = this.onSubmitUpdate.bind(this);
    this.onChangeLinkUpdate = this.onChangeLinkUpdate.bind(this);
    this.handleModal2=this.handleModal2.bind(this);
    this.state = {
      backgrounds: [],
      show2:false,
      update:0,
      titleupdate:'',
      contentupdate:'',
      linkupdate:''
    };
  }
 
  onChangeContentUpdate(e) {
    this.setState({contentupdate: e.target.value})
  }
  
  
  onChangeTitleUpdate(e) {
    this.setState({titleupdate: e.target.value})
    console.log(this.state.titleupdate)
  }
  onChangeLinkUpdate(e) {
    this.setState({linkupdate: e.target.value})
    console.log(this.state.linkupdate)
  }


  onSubmitUpdate(e) {
    e.preventDefault();

    const expense = new FormData(); 
     expense.append( 
      "link",
     this.state.linkupdate
    ); 
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
    axios.post('http://localhost:4000/api/backgrounds/' + this.state.update, expense)
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

    this.setState({contentupdate: '', titleupdate: '',linkupdate:''})
  }


  componentDidMount() {
    axios.get('http://localhost:4000/api/backgrounds/')
      .then(res => {
        this.setState({
          backgrounds: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  handleModal2(){  
    this.setState({show2:!this.state.show2,update:2})  
  }  
    render(){
        return(
        <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Backgrounds</h4>
                  <p className="card-description">
                  <button className="addbutton" onClick={this.handleModal2}>Edit</button>
                  </p>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Content</th>
                          <th>Link</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.backgrounds.map((background, i) => {
    return(
      <tr>
      <td>
      <p className="testitle">{background.background_title}</p>
        </td>
      <td>
      <p className="testcontent">{background.background_content}</p>
        </td>

      <td><p className="testitle">{background.background_link}</p></td>
      <Modal show={this.state.show2} onHide={()=>this.handleModal2()}>  
    <Modal.Header closeButton>Edit background</Modal.Header>  
    <Modal.Body>
    <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">

          <Form onSubmit={this.onSubmitUpdate} encType="multipart/form-data">
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder={background.background_title} onChange={this.onChangeTitleUpdate}/>
       </Form.Group>
      </Col>
  </Row>
  <Row> 
      <Col>
       <Form.Group controlId="Name">
          <Form.Label>Link Video</Form.Label>
          <Form.Control type="text" placeholder={background.background_link} onChange={this.onChangeLinkUpdate}/>
       </Form.Group>
      </Col>
  </Row>
  <Form.Group controlId="email">
    <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" type="textarea" placeholder={background.background_content} onChange={this.onChangeContentUpdate}/>
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
    </tr>
    
    )})}
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <BackgroundItem />
        </div>
        </div>
      </div>
      );
    }
}
export default Background;