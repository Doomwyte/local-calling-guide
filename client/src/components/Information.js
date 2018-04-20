import React from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import List from "./List";

class Information extends React.Component{
	render(){
		return(
			<div className="number__info">
				{
					this.props.npanxx &&
					<p className="number__key">NPA-NXX:
						<span className="number__value"> {this.props.npanxx}</span>
					</p>
				}
				{ 
					this.props.rateCenter &&
					<p className="number__key">Rate Center: 
							<span className="number__value"> {this.props.rateCenter}</span>
					</p> 
				}
				{ 
					this.props.province && 
					<p className="number__key">Province: 
						<Link to={"/list"}>
							<span className="number__value"> {this.props.province}</span>
						</Link>
					</p> 
				}
				{ 
					this.props.switch && 
					<p className="number__key">Switch: 
						<Link to={"/list"}>
							<span className="number__value"> {this.props.switch}</span>
						</Link>
					</p> 
				}
				{ 
					this.props.ocn && 
					<p className="number__key">OCN: 
						<Link to={"/list"}>
							<span className="number__value"> {this.props.ocn}</span>
						</Link>
					</p> 
				}				
				{ 
					this.props.companyName && 
					<p className="number__key">Company Name: 
						<Link to={"/list"}>
							<span className="number__value"> {this.props.companyName}</span>
						</Link>
					</p> 
				}	
				{ 
					this.props.portability && 
					<p className="number__key">Portability: 
						<span className="number__value"> {this.props.portability}</span>
					</p> 
				}			
				{ 
					this.props.lrn && 
					<p className="number__key">LRN: 
						<span className="number__value"> {this.props.lrn}</span>
					</p> 
				}								
				{ 
					this.props.error && <p className="number__error">{ this.props.error }</p> 
				}
			</div>
		);
	}
};

// const List = () => (
// 	<div>
// 		<p>Hello World!</p>
// 	</div>
// );

export default Information;