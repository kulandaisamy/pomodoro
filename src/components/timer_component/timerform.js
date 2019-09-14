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
        if (e.target.value >= 0) {
            this.setState({ [e.target.name]: e.target.value });
        }
        setTimeout(() => {
            let hour = this.state.hour;
            let minute = this.state.minute;
            let second = this.state.second;
            this.props.handleState(hour, minute, second);
        }, 0);
    };

    handleDisable = () => {
        if (this.state.hour) {
            if (this.state.minute) {
                if (this.state.second) {
                    document.getElementById("timer").style.visibility =
                        "visible";
                    document.getElementById("click").disabled = true;
                    this.setState({ disabled: true });
                } else {
                    alert("ENTER SECOND");
                }
            } else {
                alert("ENTER MINUTE");
            }
        } else {
            alert("ENTER HOUR");
        }
    };

    onClick = e => {
        this.handleDisable();
        this.props.handleTimer();
    };
    pauseTimer = e => {
        document.getElementById("click").disabled = false;
        clearInterval(this.props.id);
    };
    reset = e => {
        this.setState({ hour: "", minute: "", second: "", disabled: false });
        document.getElementById("click").disabled = false;
        document.getElementById("timer").style.visibility = "hidden";
        this.props.clearState();
        clearInterval(this.props.id);
    };

    render() {
        return (
            <div>
                <form style={{ display: "flex" }}>
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
                        type="button"
                        id="click"
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
                        id="stopbutton"
                        onClick={this.pauseTimer}
                    >
                        STOP TIME
                    </button>
                    <button
                        type="reset"
                        onClick={this.reset}
                        id="resetbutton"
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
