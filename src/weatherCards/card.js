import React, { Component } from 'react';
import './card.css';

class Card extends Component {

	returnString() {
		return "sad";
	}

	render() {
		return (
			<div>
				<h3>{this.props.data.name}, {this.props.data.sys.country}</h3>
				<p>{this.props.data.main.temp} Celsius</p>
				<img width="80" src={this.props.icon} alt="icon" />
			</div>
		);
	}
}

export default Card;