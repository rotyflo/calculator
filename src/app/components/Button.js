import React from "react";

export default class Button extends React.Component {
	render() {
		return (
			<button id={this.props.id} value={this.props.value} onClick={() => this.props.process(this.props.value)}>{this.props.value}</button>
		);
	}
}