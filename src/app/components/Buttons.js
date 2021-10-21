import React from "react";
import Button from "./Button";

export default class Buttons extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let process = this.props.process;

		return (
			<div class="buttons">
				<Button id="clear" value="C" process={process}/>
				<Button id="percentify" value="%" process={process} />
				<Button id="divide" value="/" process={process} />

				<Button id="seven" value="7" process={process} />
				<Button id="eight" value="8" process={process} />
				<Button id="nine" value="9" process={process} />
				<Button id="multiply" value="*" process={process} />

				<Button id="four" value="4" process={process} />
				<Button id="five" value="5" process={process} />
				<Button id="six" value="6" process={process} />
				<Button id="subtract" value="-" process={process} />

				<Button id="one" value="1" process={process} />
				<Button id="two" value="2" process={process} />
				<Button id="three" value="3" process={process} />
				<Button id="add" value="+" process={process} />

				<Button id="decimate" value="." process={process} />
				<Button id="zero" value="0" process={process} />
				<Button id="solve" value="=" process={process} />
			</div>
		);
	}
}