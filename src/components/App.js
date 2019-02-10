import React, { Component } from "react";
import "./App.css";
import Slider from "./Slider";

class App extends Component {
    // Create refs
    redRef = React.createRef();
    greenRef = React.createRef();
    blueRef = React.createRef();

    // Set Initial state
    state = {
        red: 255,
        green: 255,
        blue: 255
    };

    // Set Body Background color
    setBodyBgColor = (red, green, blue) => {
        // Create background color
        const bgColor = `rgb(${red}, ${green}, ${blue})`;

        // Set this color the Body
        document.body.style.backgroundColor = bgColor;
    };

    // Update Body Background color
    updateBgColor = () => {
        setTimeout(() => {
            const hexRed = this.redRef.current.rangeRef.current.value;
            const hexGreen = this.greenRef.current.rangeRef.current.value;
            const hexBlue = this.blueRef.current.rangeRef.current.value;

            // Take a coppy of state
            let red = this.state.red;
            let green = this.state.green;
            let blue = this.state.blue;

            // Update state
            red = hexRed;
            green = hexGreen;
            blue = hexBlue;

            // Set state
            this.setState({ red, green, blue });

            // Update Body Background color based on state
            this.setBodyBgColor(this.state.red, this.state.green, this.state.blue);
        }, 1);
    };

    componentDidMount() {
        // Set Initial Body Background color
        this.setBodyBgColor(this.state.red, this.state.green, this.state.blue);
    }

    render() {
        return (
            <div className="sliders">
                <h2>Body Background color changer</h2>

                <Slider
                    ref={this.redRef}
                    sliderTitle="R:"
                    sliderName="red"
                    initialValue={this.state.red}
                    updateBgColor={this.updateBgColor}
                />

                <Slider
                    ref={this.greenRef}
                    sliderTitle="G:"
                    sliderName="green"
                    initialValue={this.state.green}
                    updateBgColor={this.updateBgColor}
                />

                <Slider
                    ref={this.blueRef}
                    sliderTitle="B:"
                    sliderName="blue"
                    initialValue={this.state.blue}
                    updateBgColor={this.updateBgColor}
                />
            </div>
        );
    }
}

export default App;
