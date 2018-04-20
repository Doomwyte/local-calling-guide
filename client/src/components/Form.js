import React from "react";

class Form extends React.Component{
	render(){
		return(
			<form onSubmit={this.props.getInformation}>
				<input type='text' name='npa' placeholder="NPA"/>
        <input type='text' name='nxx' placeholder="NXX"/>
				<button>Get Info</button>
			</form>
		);
	}
};

export default Form;