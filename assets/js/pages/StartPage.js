import React from "react";
import icon from '../../images/icon.png';

class StartPage extends React.Component {
    render() {
        return (
            <div className="start-background">
                <div className="start-container flex">
                    <img src={icon} className="w-15" />
                    <div className="ml-4 pt-10 flex flex-column content-center">
                        <h1 className="font-face-intro-demo violet-color h1">Car Guesser</h1>
                        <h2 className="font-face-intro-demo violet-color-light h2">Try to guess</h2>
                        <button className="font-face-intro-demo btn-start">Start</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartPage;