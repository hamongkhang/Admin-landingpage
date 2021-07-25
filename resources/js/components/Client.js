import React,{Component} from "react";
import axios from "axios";
class Client extends Component{
    constructor(props) {
        super(props)
        this.state = {
          clients:[],
        };
      }
      componentDidMount() {
        axios.get('http://localhost:4000/api/clients/')
          .then(res => {
            this.setState({
              clients: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    render(){
        return(
        <div className="row flex-grow">
        <div className="col-12 grid-margin stretch-card">
          <div className="card card-rounded">
            <div className="card-body">
              <div className="d-sm-flex justify-content-between align-items-start">
                <div>
                  <h4 className="card-title card-title-dash">Danh sách người đăng ký</h4>
                  <a href="/pdf" className="btn btn-primary text-white me-0"><i className="icon-download" /> Export</a>
                       
                </div>
                <div>
                  <button className="btn btn-primary btn-lg text-white mb-0 me-0" type="button">Tổng số người: {this.state.clients.length} người</button>
                </div>
              </div>
              <div className="table-responsive  mt-1">
                <table className="table select-table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Created</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.clients.map((client, i) => {
    return(
     
        <tr>
        <td>
          {i}
        </td>
        <td>
          {client.name}
        </td>
        <td>
        {client.email}
        </td>
        <td>
        {client.created_at}
        </td>
      </tr>
  
    
    )})}
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}
export default Client;