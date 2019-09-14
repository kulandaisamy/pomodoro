import React from "react";
import Timerform from "./timerform.js";
import { setInterval } from "core-js";

class Timer extends React.Component {
    state = {
        hour: "",
        minute: "",
        second: "",
        distance: ""
    };
    handleState = (hour, minute, second) => {
        this.setState({
            hour,
            minute,
            second,
            distance: hour * 60 * 60 + minute * 60 + second * 1
        });
        if (this.state.distance < 0) {
            document.getElementById("timer").innerHTML = "TIME EXPRIED!";
        }
        if (this.state.hour < 10) {
            this.setState({ hour: "0" + this.state.hour });
        }
        if (this.state.minute < 10) {
            this.setState({ minute: "0" + this.state.minute });
        }
        if (this.state.second < 10) {
            this.setState({ second: "0" + this.state.second });
        }
    };
    handleTimer = () => {
        this.id = setInterval(() => {
            var hour = Math.floor(this.state.distance / (60 * 60));
            var minute = Math.floor((this.state.distance / 60) % 60);
            var second = Math.floor(this.state.distance % 60);
            this.setState({
                hour,
                minute,
                second,
                distance: this.state.distance - 1
            });
            if (this.state.distance < 0) {
                document.getElementById("timer").innerHTML = "TIME EXPRIED!";
            }
            if (this.state.hour < 10) {
                this.setState({ hour: "0" + this.state.hour });
            }
            if (this.state.minute < 10) {
                this.setState({ minute: "0" + this.state.minute });
            }
            if (this.state.second < 10) {
                this.setState({ second: "0" + this.state.second });
            }
        }, 1000);
    };

    clearState = () => {
        this.setState({ hour: "", minute: "", second: "", distance: "" });
    };

    render() {
        return (
            <div>
                <h1
                    id="timer"
                    style={{
                        visibility: "hidden",
                        position: "absolute",
                        left: "42%",
                        top: "40%"
                    }}
                >
                    {this.state.hour}:{this.state.minute}:{this.state.second}
                </h1>
                <Timerform
                    handleTimer={this.handleTimer}
                    id={this.id}
                    clearState={this.clearState}
                    handleState={this.handleState}
                />
            </div>
        );
    }
}

export default Timer;
