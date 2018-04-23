import React from 'react';
import headerlogo from '../img/telus_transparent_logo.png';
import footerlogo from '../img/telus_blackwhite_logo.png';
import '../App.css';
import Form from "./Form";
import Information from "./Information";

class Home extends React.Component{
  //hard-coded data for now
  state = {
    npanxx: undefined,
    rateCenter: undefined,
    province: undefined,
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
        "rateCenter":"Vancouver",
        "province":"British Columbia",
        "switch":"VANCBC02DS2 ",
        "ocn":"8086",
        "companyName":"TELUS",
        "portability":"Y",
        "lrn":"2362080000"
      }
    if(npa && nxx){
      console.log(data);
      this.setState({
        npanxx: data.npanxx,
        rateCenter: data.rateCenter,
        province: data.province,
        switch: data.switch,
        ocn: data.ocn,
        companyName: data.companyName,
        portability: data.portability,
        lrn: data.lrn,
        error: ""
      });      
    }
    else{
      console.log(data);
      this.setState({
        npanxx: undefined,
        rateCenter: undefined,
        province: undefined,
        switch: undefined,
        ocn: undefined,
        companyName: undefined,
        portability: undefined,
        lrn: undefined,
        error: "Please enter a value"
      });      
    }
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
            <Form getInformation={this.getInformation}/>
            <Information 
              response={this.state.response}
              npanxx={this.state.npanxx}
              rateCenter={this.state.rateCenter}
              province={this.state.province}
              switch={this.state.switch}
              ocn={this.state.ocn}
              companyName={this.state.companyName}
              portability={this.state.portability}
              lrn={this.state.lrn}
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

export default Home;