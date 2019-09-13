import React from "react";
import "./style/style.css";

class Timerform extends React.Component {
    state = {
        hour: "",
        minute: "",
        second: "",
        disabled: false
    };

    handleValue = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleDisable = () => {
        if (this.state.hour && this.state.minute && this.state.second) {
            document.getElementById("timer").style.visibility = "visible";
            this.setState({ disabled: true });
        } else {
            this.setState({ disabled: false });
        }
    };
    onClick = e => {
        let hour = this.state.hour;
        let minute = this.state.minute;
        let second = this.state.second;
        this.props.handleTimer(hour, minute, second);
        this.handleDisable();
        document.getElementById("click").disabled = true;
    };

    render() {
        return (
            <div style={{ display: "flex" }}>
                <form>
                    <input
                        style={{
                            position: "absolute",
                            width: "7%",
                            left: "35%",
                            top: "25%"
                        }}
                        className="form-control form-control-lg"
                        name="hour"
                        type="number"
                        onChange={this.handleValue}
                        value={this.state.hour}
                        placeholder="HOUR"
                        disabled={this.state.disabled}
                    />
                    <input
                        style={{
                            position: "absolute",
                            width: "9%",
                            left: "43%",
                            top: "25%"
                        }}
                        className="form-control form-control-lg"
                        name="minute"
                        type="number"
                        onChange={this.handleValue}
                        value={this.state.minute}
                        placeholder="MINUTE"
                        disabled={this.state.disabled}
                    />
                    <input
                        style={{
                            position: "absolute",
                            width: "9%",
                            left: "53%",
                            top: "25%"
                        }}
                        className="form-control form-control-lg"
                        name="second"
                        type="number"
                        onChange={this.handleValue}
                        value={this.state.second}
                        placeholder="SECOND"
                        disabled={this.state.disabled}
                    />
                    <button
                        id="click"
                        type="button"
                        onClick={this.onClick}
                        style={{
                            position: "absolute",
                            left: "38%",
                            top: "35%"
                        }}
                    >
                        START TIME
                    </button>
                    <button
                        type="button"
                        style={{
                            position: "absolute",
                            left: "46%",
                            top: "35%"
                        }}
                        onClick={this.handleStoptimer}
                    >
                        STOP TIME
                    </button>
                    <button
                        type="reset"
                        onClick={this.handleDisable}
                        style={{
                            position: "absolute",
                            left: "53.5%",
                            top: "35%"
                        }}
                    >
                        RESET
                    </button>
                </form>
            </div>
        );
    }
}

export default Timerform;
