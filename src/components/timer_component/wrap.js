import React from "react";
import Header from "./header";
import Footer from "./footer";
import Timer from "./timer";
import "./style/style.css";

class Wrap extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Footer />
                <Timer />
            </React.Fragment>
        );
    }
}
export default Wrap;
