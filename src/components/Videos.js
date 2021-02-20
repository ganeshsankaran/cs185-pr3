import { Component } from 'react';

class Images extends Component {
    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        event.stopPropagation();
    }

    /* Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay_text */
    showVideoOverlay(event) {
        var overlay = document.getElementById("overlay");
        var video = document.getElementById("overlay-item");
        
        overlay.style.display = "block";
        video.src = event.target.src;
        video.type = event.target.type;
    }
    
    hideVideoOverlay() {
        var overlay = document.getElementById("overlay");
    
        overlay.style.display = "none";
    }

    render() {
        return (<>
            <div className="content">
                <br/>
                <h2>Videos</h2>
                <p>Here are some stock videos.</p>
                <div className="grid">
                    <div className="grid-item">
                        <video onClick={this.showVideoOverlay} src={process.env.PUBLIC_URL + '/videos/video.mp4'} type="video/mp4" autoPlay loop muted></video>
                    </div>
                    <div className="grid-item">
                        <video onClick={this.showVideoOverlay} src={process.env.PUBLIC_URL + '/videos/video1.mp4'} type="video/mp4" autoPlay loop muted></video>
                    </div>
                    <div className="grid-item">
                        <video onClick={this.showVideoOverlay} src={process.env.PUBLIC_URL + '/videos/video2.mp4'} type="video/mp4" autoPlay loop muted></video>
                    </div>
                    <div className="grid-item">
                        <video onClick={this.showVideoOverlay} src={process.env.PUBLIC_URL + '/videos/video3.mp4'} type="video/mp4" autoPlay loop muted></video>
                    </div>
                    <div className="grid-item">
                        <video onClick={this.showVideoOverlay} src={process.env.PUBLIC_URL + '/videos/video4.mp4'} type="video/mp4" autoPlay loop muted></video>
                    </div>
                    <div className="grid-item">
                        <video onClick={this.showVideoOverlay} src={process.env.PUBLIC_URL + '/videos/video5.mp4'} type="video/mp4" autoPlay loop muted></video>
                    </div>
                </div>
                <br/>
            </div>
            <div id="overlay" className="overlay" onClick={this.hideVideoOverlay}>
                <video id="overlay-item" className="overlay-item" onClick={this.onClickHandler} controls></video>
            </div>
        </>);
    }
}

export default Images;