import React,{Component} from 'react';
import axios from 'axios';
class Header extends Component{
  constructor(props) {
    super(props)
    this.state = {
      thongbao: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/thongbao/')
      .then(res => {
        this.setState({
          thongbao: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
    render(){
        return(
          <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
            <div className="me-3">
              <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
                <span className="icon-menu" />
              </button>
            </div>
            <div>
              <a className="navbar-brand brand-logo">
              <img src="assets/img/logo-vi.png"  />
              </a>
              <a className="navbar-brand brand-logo-mini">
              <img src="assets/img/logo-vi.png"  />
              </a>
            </div>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-top"> 
            <ul className="navbar-nav">
              <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
                <h1 className="welcome-text">Xin chào, <span className="text-black fw-bold">Admin</span></h1>
                <h3 className="welcome-sub-text">Bạn sẽ làm gì cho tuần này nào!</h3>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
         <li className="nav-item d-none d-lg-block">
                <div id="datepicker-popup" className="input-group date datepicker navbar-date-picker">
                  <span className="input-group-addon input-group-prepend border-right">
                    <span className="icon-calendar input-group-text calendar-icon" />
                  </span>
                  <input type="text" className="form-control" />
                </div>
              </li>
             
              <li className="nav-item dropdown"> 
                <a className="nav-link count-indicator" id="countDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="icon-bell" />
                  <span className="count" />
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="countDropdown">
                  <a className="dropdown-item py-3">
                    <p className="mb-0 font-weight-medium float-left">Bạn có {this.state.thongbao.length} thông báo mới</p>
                  </a>
                  
                  <div className="dropdown-divider" />
                  {this.state.thongbao.map((thong, i) => {
    return(
                  <a className="dropdown-item preview-item">
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">{thong.name} </p>
                      <p className="fw-light small-text mb-0"> {thong.content} </p>
                    </div>
                  </a>
    )})}
                </div>
              </li>
              <li className="nav-item dropdown d-none d-lg-block user-dropdown">
                <a className="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="img-xs rounded-circle" src="images/faces/face8.jpg" alt="Profile image" /> </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                  <div className="dropdown-header text-center">
                    <img className="img-md rounded-circle" src="images/faces/face8.jpg" alt="Profile image" />
                    <p className="mb-1 mt-3 font-weight-semibold">Admin</p>
                    <p className="fw-light text-muted mb-0">hamongkhang@gmail.com</p>
                  </div>
                  </div>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-bs-toggle="offcanvas">
              <span className="mdi mdi-menu" />
            </button>
          </div>
        </nav>
        
          );
    }
}
export default Header;