import { Component } from 'react';

class Text extends Component {
    render() {
        return (<>
            <div className="content">
                <br/>
                <h2>Text</h2>
                <p>First things first: <code>Hello, World!</code></p><hr/>
                <p>The static assets for this page can be found at <a href="https://github.com/ganeshsankaran/cs185-pr3">this GitHub repo</a>.</p>
                <p>To download the source code, please do the following: </p>
                <pre>git clone https://github.com/ganeshsankaran/cs185-pr3<br/>git pull origin master</pre>
                <hr/>
                <p>This website has 4 tabbed pages which display content of the following kinds of data:</p>
                <ul>
                    <li>Text</li>
                    <li>Images</li>
                    <li>Videos</li>
                    <li>Table</li>
                </ul>
                <p>These pages can be accessed via the navigation menu above. Enjoy!</p><hr/>
                <p>To help me improve this website, please submit your feedback:</p>
                <p><i>Note: this form doesn't actually do anything!</i></p>
                <form>
                    <label>What is your name?</label><br/>
                    <input type="text"/><br/><br/>
                    <label>Do you like this website?</label><br/>
                    <input name="like" type="radio"/>
                    <label>Yes</label><br/>
                    <input name="like" type="radio"/>
                    <label>Also yes</label><br/><br/>
                    <input type="checkbox"/>
                    <label>Sign me up for the fan club!</label><br/><br/>
                    <input type="button" value="Submit!"/>
                </form>
                <br/>
            </div>
        </>);
    }
}

export default Text;