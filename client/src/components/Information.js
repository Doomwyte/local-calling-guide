import React from "react";

class Information extends React.Component{
	render(){
		return(
			<div className="number__info">
				{
					this.props.response &&
					<p className="number__key">Response:
						<span className="number__value1"> {this.props.response}</span>
					</p>
				}
				{
					this.props.npanxx &&
					<p className="number__key">NPA-NXX:
						<span className="number__value"> {this.props.npanxx}</span>
					</p>
				}
				{ 
					this.props.city &&
					<p className="number__key">Rate Center: 
						<span className="number__value"> {this.props.city}</span>
					</p> 
				}
				{ 
					this.props.region && 
					<p className="number__key">Region: 
						<span className="number__value"> {this.props.region}</span>
					</p> 
				}
				{ 
					this.props.switch && 
					<p className="number__key">Switch: 
						<span className="number__value"> {this.props.switch}</span>
					</p> 
				}
				{ 
					this.props.error && <p className="number__error">{ this.props.error }</p> 
				}
			</div>
		);
	}
};

export default Information;