import './App.css';
import Body from './components/Body.js';
import TabList from './components/TabList';
import { Component } from 'react';

/* Credits: Jinesh Jhonsa */
class App extends Component {
  constructor() {
    super();

    this.state = {active: 0};

    this.changeTab = (id) => {
      this.setState({active: id});
    }

    this.onScrollHandler = this.onScrollHandler.bind(this);
    this.toggleScrollBtn = this.toggleScrollBtn.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  /* Source: https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js */
  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler(event) {
    this.toggleScrollBtn();
  }

  toggleScrollBtn() {
    /* Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top */
    var scrollBtn = document.getElementById("scroll");
    var height = window.innerHeight / 4;

    if(document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        scrollBtn.style.display = "block";
    }
    else {
        scrollBtn.style.display = "none";
    }
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this.toggleScrollBtn();
  }
    
  render() {
    const tabs = [
      {id: 0, title: "Text"},
      {id: 1, title: "Images"},
      {id: 2, title: "Videos"},
      {id: 3, title: "Table"},
      {id: 4, title: "E-mail"}
    ];

    return (<>
      <div className="header">
        <h1>CS185: Programming Assignment 3</h1>
        <p>Website Setup Using React</p>
      </div>
      <div className="menu">
        <TabList tabs={tabs} active={this.state.active} ctab={this.changeTab}/>
      </div>
      <Body active={this.state.active}/>
      <div className="footer">
        <p>By Ganesh Sankaran, Winter 2021</p>
      </div>
      <button id="scroll" onClick={this.scrollToTop}>Up &#8593;</button>
    </>);
  }
}

export default App;