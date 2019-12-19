import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import ContactList from "./components/ContactList/contactlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import AddContact from "./components/AddContact/AddContact";
import NotFound from "./components/NotFound/NotFound";
import Edit from "./components/Edit/Edit";
import MainMenue from "./components/menu/menu";
class App extends React.Component {
  id=100;
  state = {
    List: [
      {
        id: 1,
        name: "Jack Sparrow",
        description: "Capitan",
        avatar: 58,
        gender: "men",
        facebooklist: "CaptainJackSparrow",
        twitterList: "BlueEugeo_4y",
        linkeDin:
          "jobs/search?keywords=Senior%20Information%20Technology%20Business%20Analyst&location=Ровенская%20область%2C%20Украина&trk=guest_job_search_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0",
        skype: "uk",
        messager: "uk/mm",
        favorite: false
      },

      {
        id: 2,
        name: "Julia Roberts",
        description: "Treny",
        avatar: 32,
        gender: "women",
        facebooklist:
          "pages/category/Actor/Julia-Roberts-officiel-134054339970575/",
        twitterList: "juliaroberts",
        linkeDin:
          "jobs/search?keywords=Senior%20Information%20Technology%20Business%20Analyst&location=Ровенская%20область%2C%20Украина&trk=guest_job_search_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0",
        skype: "uk",
        messager: "uk/mm",
        favorite: false
      },

      {
        id: 3,
        name: "Geoffrey Rush",
        description: "Distructor",
        avatar: 18,
        gender: "men",
        facebooklist: "Geoffrey-Rush-419192964762662/",
        twitterList: "geoffreyrush",
        linkeDin:
          "jobs/search?keywords=Senior%20Information%20Technology%20Business%20Analyst&location=Ровенская%20область%2C%20Украина&trk=guest_job_search_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0",
        skype: "uk",
        messager: "uk/mm",
        favorite: false
      },

      {
        id: 4,
        name: "Gal Gadot",
        description: "Cowboy",
        avatar: 75,
        gender: "women",
        facebooklist: "GalGadot/",
        twitterList: "galgadot",
        linkeDin:
          "jobs/search?keywords=Senior%20Information%20Technology%20Business%20Analyst&location=Ровенская%20область%2C%20Украина&trk=guest_job_search_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0",
        skype: "uk",
        messager: "uk/mm",
        favorite: false
      },

      {
        id: 5,
        name: "Sylvester Stallone",
        description: "Descriptor",
        avatar: 1,
        gender: "men",
        facebooklist: "SylvesterStallone/",
        twitterList: "theslystallone",
        linkeDin:
          "jobs/search?keywords=Senior%20Information%20Technology%20Business%20Analyst&location=Ровенская%20область%2C%20Украина&trk=guest_job_search_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0",
        skype: "uk",
        messager: "uk/mm",
        favorite: false
      }
    ]
  };

  onDelete = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    let newList = [];
    let counter = 0;
    for (let i = 0; i < this.state.List.length; i++) {
      if (i !== index) {
        newList[counter] = this.state.List[i];
        counter++;
      }
    }

    this.setState(state => {
      return {
        List: newList
      };
    });
  };

  StarFavor = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    let newList = this.state.List.slice();
    newList[index].favorite = !newList[index].favorite;

    this.setState(() => {
      return {
        favorite: newList
      }
    });
  };

  onAddNewContact = (name, description, avatar, gender) => {
    this.id++;
    const newContact={
      id: this.id,
      name:name,
      description:description,
      avatar:avatar,
      gender:gender,
      favorite: false
    };
     const newContactArr=[...this.state.List, newContact];
     this.setState(() => {
      return {
        List:newContactArr
      };
    });
    
  };



// GetContactContact =(id)=>{
 //  let singelContact = [];
 // const index = this.state.List.findIndex(elem => elem.id === id);
 // for(let i=0; i<this.List.length; i++){
   // if (i===index){
  
 // let singelContact ={
  // id: this.id,
    //  name:this.state.List[i].name,
    //  description: this.state.List[i].description,
    //  avatarname:this.state.List[i].avatar,
    //  gender:this.state.List[i].gender,
     // favorite: false
 // };
 // singelContactArr.push(singelContact);
//}
// };
//}
 // EditContact = (singelContactArr)=>{
 //   singelContact = singelContact;
 //};

  render() {
    return (
      <Router>
        <div className="container bootstrap snippet">
          <MainMenue></MainMenue>
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <ContactList
                  ContactList={this.state.List}
                  onDelete={this.onDelete}
                  StarFavor={this.StarFavor}
                  onAddNewContact={this.onAddNewContact}
                  onEdits={this.onEdits} 
                  GetContactContact={this.GetContactContact}/>
              )}
            ></Route>
            <Route path="/about" exact component={About}></Route>
            <Route
              path="/add"
              exact
              component={() => (
                <AddContact onAddNewContact={this.onAddNewContact} />
              )}
            ></Route>
           
           /<Route path="/edit" exact 
    component={Edit}>
              </Route>
           
            <Router path="*" exact component={NotFound}></Router>
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
