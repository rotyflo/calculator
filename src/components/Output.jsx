import React from "react";

export default class Output extends React.Component {
	render() {
		return (
			<div id="output-container">
				<p id="output">{this.props.output}</p>
			</div>
		);
	}
}