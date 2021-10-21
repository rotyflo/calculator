import React from "react";

export default class Button extends React.Component {
	render() {
		let id = this.props.id;
		let value = this.props.value;
		let process = this.props.process;

		return (
			<button id={id} value={value} onClick={() => process(value)}>{value}</button>
		);
	}
}