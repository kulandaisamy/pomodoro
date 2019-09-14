import React from "react";
import moment from "moment";

class Header extends React.Component {
    state = {
        time: moment().format("MMMM DD YYYY h:mm:ss a")
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: moment().format("MMMM DD YYYY h:mm:ss  a")
            });
        }, 1000);
    }
    render() {
        return (
            <span>
                <h2 className="header">
                    <span style={{ color: "orange" }}>WELCOME&nbsp;</span> TO
                    <span style={{ color: "green" }}>&nbsp;POMODORO</span>
                    &nbsp;APP
                </h2>
                <div
                    className="display"
                    style={{
                        position: "absolute",
                        right: 20,
                        top: "12%",
                        color: "green"
                    }}
                >
                    {this.state.time}
                </div>
            </span>
        );
    }
}
export default Header;
