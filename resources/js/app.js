import ReactDOM from 'react-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditExpense from "./components/edit-expense.component";
import ExpensesList from "./components/expenses-listing.component";
import CreateExpense from "./components/create-expense.component";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Header from "./components/Header";
import Color from "./components/Color";
import Color2 from "./components/Color2";
import React,{Component} from 'react';
import Login from "./components/Login";

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      admin:[],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/login/')
      .then(res => {
        this.setState({
          admin: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render(){
    if(this.state.admin.length>0){
  return (
  <Router>
    
    <div className="container-scroller"> 
       <Header />
        <div className="container-fluid page-body-wrapper">
          <Color />
        <Menu />
        </div>
      </div>
      {/* <CreateExpense /> */}
  </Router>
  );}
  else{
    return (
      <Router>
       <Login />
      </Router>
    );
}
}
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
