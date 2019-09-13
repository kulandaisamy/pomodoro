import React from "react";
import Timerform from "./timerform.js";

class Timer extends React.Component {
    state = {
        hour: "",
        minute: "",
        second: "",
        distance: ""
    };

    handleTimer = (hour, minute, second) => {
        this.setState({
            hour,
            minute,
            second,
            distance: hour * 60 * 60 + minute * 60 + second * 1
        });
        setInterval(() => {
            var hour = Math.floor((this.state.distance / (60 * 60)) % 12);
            var minute = Math.floor((this.state.distance / 60) % 60);
            var second = Math.floor(this.state.distance % 60);
            this.setState({
                hour,
                minute,
                second,
                distance: this.state.distance - 1
            });
        }, 1000);
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
                <Timerform handleTimer={this.handleTimer} />
            </div>
        );
    }
}

export default Timer;
