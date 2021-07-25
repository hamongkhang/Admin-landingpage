import React,{Component} from 'react';
import axios from 'axios';
class Thongkecount extends Component{
  constructor(props) {
    super(props)
    this.state = {
      thongkes:[],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/thongkecount/')
      .then(res => {
        this.setState({
          thongkes: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
    render(){
        return(
            <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-sm-12">
                  <div className="home-tab">
                    <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                      
                      <div>
                        <div className="btn-wrapper">
                        
                          <a href="/main" className="btn btn-primary text-white me-0"><i className="icon-download" /> Export</a>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content tab-content-basic">
                      <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview"> 
                        
                        <div className="row">
                          <div className="col-lg-12 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="d-sm-flex justify-content-between align-items-start">
                                      <div>
                                        <h4 className="card-title card-title-dash">Thống kê ủng hộ trong tuần</h4>
                                        <div className="d-sm-flex align-items-center mt-4 justify-content-between"><h2 className="me-2 fw-bold">{this.state.thongkes[10]} người</h2><h4 className="text-success">(+0.00%)</h4></div>
                                         </div>
                                      <div id="performance-line-legend" />
                                    </div>
                                    <div className="chartjs-wrapper mt-5">
                                    <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                      <tr>
                          <th>
                            Sun
                          </th>
                          <th>
                           Mon
                          </th>
                          <th>
                          Tue
                          </th>
                          <th>
                            Web
                          </th>
                          <th>
                            Thu
                          </th>
                          <th>
                            Fri
                          </th>
                          <th>
                            Sat
                          </th>
                        </tr>
                      </thead>
                      <tbody>

      <tr>
      <td className="py-1">
      {this.state.thongkes[9]}
      </td>
         <td className="py-1">
         {this.state.thongkes[3]}
      </td>
      <td className="py-1">
      {this.state.thongkes[4]}
      </td>
      <td className="py-1">
      {this.state.thongkes[5]}
      </td>
      <td className="py-1">
      {this.state.thongkes[6]}
      </td>
      <td className="py-1">
      {this.state.thongkes[7]}
      </td>
      <td className="py-1">
      {this.state.thongkes[8]}
      </td>
    </tr>
    
   
     
                      </tbody> 
                    </table>
                  </div>
                
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                         
                        </div>
                        <div className="row">
                          <div className="col-lg-12 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="d-sm-flex justify-content-between align-items-start">
                                      <div>
                                        <h4 className="card-title card-title-dash">Thống kê ủng hộ theo tháng</h4>
                                      </div>
                                      <div>
                                      </div>
                                    </div>
                                    <div className="d-sm-flex align-items-center mt-1 justify-content-between">
                                      <div className="d-sm-flex align-items-center mt-4 justify-content-between"><h2 className="me-2 fw-bold">{this.state.thongkes[23]} người</h2><h4 className="text-success">(+0.00%)</h4></div>
                                      <div className="me-3"><div id="marketing-overview-legend" /></div>
                                    </div>
                                    <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                      <tr>
                          <th>
                            Jan
                          </th>
                          <th>
                           Feb
                          </th>
                          <th>
                          Mar
                          </th>
                          <th>
                            Apr
                          </th>
                          <th>
                            May
                          </th>
                          <th>
                            Jun
                          </th>
                          <th>
                            Jul
                          </th>
                          <th>
                            Aug
                          </th>
                          <th>
                           Sec
                          </th>
                          <th>
                          Oct
                          </th>
                          <th>
                            Nov
                          </th>
                          <th>
                            Dec
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody>

      <tr>
      <td className="py-1">
      {this.state.thongkes[11]}
      </td>
      <td className="py-1">
      {this.state.thongkes[12]}
      </td>
      <td className="py-1">
      {this.state.thongkes[13]}
      </td>
      <td className="py-1">
      {this.state.thongkes[14]}
      </td>
      <td className="py-1">
      {this.state.thongkes[15]}
      </td>
      <td className="py-1">
      {this.state.thongkes[16]}
      </td>
      <td className="py-1">
      {this.state.thongkes[17]}
      </td>
      <td className="py-1">
      {this.state.thongkes[18]}
      </td>
      <td className="py-1">
      {this.state.thongkes[19]}
      </td>
      <td className="py-1">
      {this.state.thongkes[20]}
      </td>
      <td className="py-1">
      {this.state.thongkes[21]}
      </td>
      <td className="py-1">
         {this.state.thongkes[22]}
      </td>
    </tr>
    
   
     
                      </tbody> 
                    </table>
                  </div>
                
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                         </div>
                          <div className="col-lg-4 d-flex flex-column">
                            
                         </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
         
        );
    }
}
export default Thongkecount;