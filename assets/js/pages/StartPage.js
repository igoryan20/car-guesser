import React from "react";
import icon from '../../images/icon.png';

class StartPage extends React.Component {
    render() {
        return (
            <div className="start-background">
                <div className="container">
                    <img src={icon} width="10%" />
                    <h1 className="font-face-intro-demo">Car Guesser</h1>
                    <h3 className="font-face-intro-demo">Try to guess</h3>
                    <button className="font-face-intro-demo btn-start">Start</button>
                </div>
            </div>
        )
    }
}

export default StartPage;