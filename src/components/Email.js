import { Component } from 'react';

class Email extends Component {
    validateEmail() {
        var email = document.getElementById("email").value;
        var result = document.getElementById("result");
    
        if(email.includes("@") && (email.endsWith(".com") || email.endsWith(".edu"))) {
            result.style.color = "green";
            result.innerHTML = "E-mail successfully recorded!";  
        }
        else {
            result.style.color = "red";
            result.innerHTML = "E-mail is invalid!";
        }
    }

    render() {
        return (<>
            <div className="content">
                <br/>
                <h2>E-mail</h2>
                <label>E-mail: </label><br/>
                <input id="email" type="text"/>
                <p id="result"></p>
                <button onClick={this.validateEmail}>Submit!</button>
                <br/>
            </div>
        </>);
    }
}

export default Email;