import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Main from './Main';
import Background from "./Background";
import Milestone from "./Milestone";
import Impact from "./Impact";
import Admission from "./Admission";
import Count from "./Count";
import Partner from "./Partner";
import Board from "./Board";
import Staff from "./Staff";
import Student from "./Student";
import Gallery from "./Gallery";
import Recruitment from "./Recruitment";
import Bangtin from './Bangtin';
import Client from "./Client";
import Login from "./Login";
import Thongkecount from "./Thongkecount";
class Menu extends Component{
  constructor(props) {
    super(props)
    this.deleteExpense=this.deleteExpense.bind(this);
    this.state = {
      logins: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/logins/')
      .then(res => {
        this.setState({
          logins: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  deleteExpense(id){
    if (window.confirm("Are you sure?")) {
      axios.delete('http://localhost:4000/api/login/'+id)
      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
          console.log(error)
      })
      location.reload();
    }
  }
    render(){
        return(
            <Router>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item">
              <Link to={'/'} className="nav-link">   
                  <i className="mdi mdi-grid-large menu-icon" />
                  <span className="menu-title">Home</span>
             </Link>
              </li>
             <li className="nav-item nav-category">Forms and Datas</li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                  <i className="menu-icon mdi mdi-card-text-outline" />
                  <span className="menu-title">Thống kê</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="form-elements">
                  <ul className="nav flex-column sub-menu">

                    <li className="nav-item">
                    <Link to={'/Client'} className="nav-link">   
                    Người đăng ký
             </Link>
                      </li>
                      <li className="nav-item">
                    <Link to={'/Thongkecount'} className="nav-link">   
                    Thống kê số người ủng hộ
             </Link>
                      </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                  <i className="menu-icon mdi mdi-table" />
                  <span className="menu-title">Edit Page</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="tables">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <Link to={'/Background'} className="nav-link"> Background</Link></li>
                    <li className="nav-item"> <Link to={'/Milestone'} className="nav-link"> Cột mốc phát triển</Link></li>
                    <li className="nav-item"> <Link to={'/Impact'} className="nav-link"> Tác động xã hội</Link></li>
                    <li className="nav-item"> <Link to={'/Admission'} className="nav-link"> Tuyển sinh</Link></li>
                    <li className="nav-item"> <Link to={'/Count'} className="nav-link"> Số liệu thống kê</Link></li>
                    <li className="nav-item"> <Link to={'/Partner'} className="nav-link"> Đối Tác</Link></li>
                    <li className="nav-item"> <Link to={'/Board'} className="nav-link"> Sơ đồ hoạt động</Link></li>
                    <li className="nav-item"> <Link to={'/Staff'} className="nav-link"> Nhân viên</Link></li>
                    <li className="nav-item"> <Link to={'/Shared'} className="nav-link"> Chia sẻ</Link></li>
                    <li className="nav-item"> <Link to={'/Gallery'} className="nav-link"> Thư viện ảnh</Link></li>
                    <li className="nav-item"> <Link to={'/Recruitment'} className="nav-link"> Tuyển Dụng</Link></li>
                    <li className="nav-item"> <Link to={'/Bangtin'} className="nav-link"> Bảng Tin</Link></li>
                  </ul>
                </div>
              </li>
            
              <li className="nav-item">
              <div className="nav-link">
                <i className="dropdown-item-icon mdi mdi-power text-primary me-2" />
                  <button onClick={()=>this.deleteExpense(1)} className="menu-title">Đăng xuất</button>
               
                  <i className="menu-arrow" />
                </div>
              </li>
          
              
              {/* <li className="nav-item nav-category">pages</li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                  <i className="menu-icon mdi mdi-account-circle-outline" />
                  <span className="menu-title">User Pages</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="auth">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <a className="nav-link" href=""> Login </a></li>
                  </ul>
                </div>
              </li> */}
            </ul>
          </nav>
          <Switch>
            <Route exact path ='/' component={Main} />
            <Route path ='/Background' component={Background} /> 
            <Route path ='/Milestone' component={Milestone} />
            <Route path ='/Impact' component={Impact} />
            <Route path ='/Admission' component={Admission} />
            <Route path ='/Count' component={Count} />
            <Route path ='/Partner' component={Partner} />
            <Route path ='/Board' component={Board} />
            <Route path ='/Staff' component={Staff} />
            <Route path ='/Shared' component={Student} />
            <Route path ='/Gallery' component={Gallery} />
            <Route path ='/Recruitment' component={Recruitment} />
            <Route path ='/Bangtin' component={Bangtin} />
            <Route path ='/Client' component={Client} />
            <Route path ='/Login' component={Login} />
            <Route path ='/Thongkecount' component={Thongkecount} />
          </Switch>
          </Router>
            );
    }
}
export default Menu;


