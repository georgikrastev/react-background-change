import React, { Component } from "react";

class Slider extends Component {
	rangeRef = React.createRef();

	render() {
		return (
			<div className="slider">
				<span>{this.props.sliderTitle}</span>

				<input
					type="range"
					ref={this.rangeRef}
					name={this.props.sliderName}
					min="0"
					max="255"
					defaultValue={this.props.initialValue}
					onChange={this.props.updateBgColor}
				/>

				<span>{this.props.initialValue}</span>
			</div>
		);
	}
}

export default Slider;
