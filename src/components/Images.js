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
    showImgOverlay(event) {
        var overlay = document.getElementById("overlay");
        var img = document.getElementById("overlay-item");
        
        overlay.style.display = "block";
        img.src = event.target.src;
    }

    hideImgOverlay() {
        var overlay = document.getElementById("overlay");

        overlay.style.display = "none";
    }

    render() {
        return (<>
            <div className="content">
                <br/>
                <h2>Images</h2>
                <p>Here are some stock images from Unsplash:</p>
                <div className="grid">
                    <div className="grid-item">
                        <img onClick={this.showImgOverlay} src={process.env.PUBLIC_URL + '/images/img.jpg'}/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.showImgOverlay} src={process.env.PUBLIC_URL + '/images/img1.jpg'}/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.showImgOverlay} src={process.env.PUBLIC_URL + '/images/img2.jpg'}/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.showImgOverlay} src={process.env.PUBLIC_URL + '/images/img3.jpg'}/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.showImgOverlay} src={process.env.PUBLIC_URL + '/images/img4.jpg'}/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.showImgOverlay} src={process.env.PUBLIC_URL + '/images/img5.jpg'}/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.showImgOverlay} src={process.env.PUBLIC_URL + '/images/img6.jpg'}/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.showImgOverlay} src={process.env.PUBLIC_URL + '/images/img7.jpg'}/>
                    </div>
                </div>
                <br/>
            </div>
            <div id="overlay" className="overlay" onClick={this.hideImgOverlay}>
                <img id="overlay-item" className="overlay-item" onClick={this.onClickHandler}/>
            </div>
        </>);
    }
}

export default Images;