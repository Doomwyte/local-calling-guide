import React from 'react';
import './App.css';
import Home from "./components/Home";

class App extends React.Component{
  // for connecting with the SOAP web service, once its up
  // componentDidMount(){
  //   this.callApi()
  //     .then(res => this.setState({response: res.express}))
  //     .catch(err => console.log(err));
  // }
  // callApi = async () =>{
  //   const response = await fetch('/api/soap');
  //   const body = await response.json();
  //   if(response.status!==200) throw Error(body.message);
  //   return body;
  // };
  render() {
    return (
      <Home />
    );
  }
}

export default App;