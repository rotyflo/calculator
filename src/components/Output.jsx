import React from "react";

export default class Output extends React.Component {
	render() {
		return (
			<div id="display-container">
				<p id="display">{this.props.output}</p>
			</div>
		);
	}
}