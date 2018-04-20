import React from 'react';
import headerlogo from './img/telus_transparent_logo.png';
import footerlogo from './img/telus_blackwhite_logo.png'
import './App.css';
import Form from "./components/Form";
import Information from "./components/Information";

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

  //hard-coded data for now
  state = {
    npanxx: undefined,
    city: undefined,
    region: undefined,
    switch: undefined,
    error: undefined
  }
  getInformation = async (e) => {
    e.preventDefault();
    const npa = e.target.elements.npa.value;
    const nxx = e.target.elements.nxx.value;
    const data = 
      {
        "npanxx":"604-222",
        "city":"Vancouver",
        "region":"British Columbia",
        "switch":"VANCBC02DS2 ",
      }
    if(npa && nxx){
      console.log(data);
      this.setState({
        npanxx: data.npanxx,
        city: data.city,
        region: data.region,
        switch: data.switch,
        error: ""
      });      
    }
    else{
      console.log(data);
      this.setState({
        npanxx: undefined,
        city: undefined,
        region: undefined,
        switch: undefined,
        error: "Please enter a value"
      });      
    }
  }
  activateLasers(){
    console.log("goodbye cruel world");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={headerlogo} className="App-headerlogo" alt="logo" />
          <span className="App-headertext">Local Calling Guide</span>
        </header>       
        <div className="main">
          <div className="col-xs-12 form-container">
          <button>test</button>
            <Form getInformation={this.getInformation}/>
            <Information 
              response={this.state.response}
              npanxx={this.state.npanxx}
              city={this.state.city}
              region={this.state.region}
              switch={this.state.switch}
              error={this.state.error}
            />
          </div>          
        </div>    
        <footer className="App-footer">
          <img src={footerlogo} className="App-footerlogo" alt="logo" />
        </footer>
      </div>
    );
  }
}

export default App;