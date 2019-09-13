import React from "react";

function Footer() {
    return (
        <div
            style={{
                position: "absolute",
                bottom: 0,
                left: "40%",
                color: "grey"
            }}
        >
            {new Date().getFullYear()}©Designed And Developed by KULANDAISAMY
        </div>
    );
}
export default Footer;
