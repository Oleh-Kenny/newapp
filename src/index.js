import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


import { BrowserRouter as Router } from "react-router-dom";

import MainMenue from "./components/menu/menu";
import Map from "./components/Map/map";
import ContactList from "./components/ContactList/contactlist";
class App extends React.Component {
  state = {
    List: []
  };

  componentDidMount() {
    fetch(
      "https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=Rivne"
    )
      .then(response => response.json())
      .then(({devices}) => {
        this.setState({
          List:devices
        });
      });
  }

  render() {
   
    return( 
      <Router>
      
        <MainMenue></MainMenue>
        <ContactList
          ContactList={this.state.List}/>
        
        <Map></Map>
      
    </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

