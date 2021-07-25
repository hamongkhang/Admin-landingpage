import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button,Modal} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';
class Login extends Component{
  constructor(props) {
    super(props)
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
    };
  }
  
onChangeUsername(e) {
  this.setState({username: e.target.value})
}


onChangePassword(e) {
  this.setState({password: e.target.value})
}

onSubmit(e) {  
  const expense = new FormData(); 
  expense.append( 
    "username",
   this.state.username
  ); 
  expense.append( 
    "password",
   this.state.password
  ); 
  console.log(expense);
  axios.post('http://localhost:4000/api/login', expense)
    .then(res => console.log(res.data));
  // console.log(`Expense successfully created!`);
  // console.log(`Name: ${this.state.name}`);
  // console.log(`Amount: ${this.state.amount}`);
  // console.log(`Description: ${this.state.description}`);
  Swal.fire(
'Good job!',
'Loggin Successfully',
'success'
)
}
    render(){
        return(
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                  <img src="assets/img/logo-vi.png"  />
                  </div>
                  <h4>Xin chào! Chúng ta bắt đầu nào</h4>
                  <h6 className="fw-light">Đăng nhập để tiếp tục.</h6>
                  <Form  onSubmit={this.onSubmit} encType="multipart/form-data">
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Control type="text" placeholder="Tên tài khoản"  value={this.state.username} onChange={this.onChangeUsername} />
             </Form.Group>
            
            </Col>
            
           
           
        </Row>
       
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Control type="password" placeholder="Mật khẩu" value={this.state.password} onChange={this.onChangePassword} />
             </Form.Group>
            
            </Col>
            
           
           
        </Row>

       
        <Button variant="primary" size="lg" block="block" type="submit">Submit</Button>
      </Form>


                </div>
              </div>
            </div>
          </div>
          {/* content-wrapper ends */}
        </div>
      
        );
    }
}
export default Login;