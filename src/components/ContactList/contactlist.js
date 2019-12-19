import React, { Fragment } from "react";
import "./contactlist.css";
import ContactItem from "./ContactItem/contactitem";
import SerchComponent from "../SerchComponent/search";


const ContactList = ({ ContactList, onDelete, StarFavor }) => {
  console.log("Arrey =>", ContactList);
  const listIthem = ContactList.map(item => {
    return (
      <ContactItem
        key={item.id}
        avatar={item.avatar}
        name={item.name}
        description={item.description}
        gender={item.gender}
        facebbok={item.facebooklist}
        twitt={item.twitterList}
        linked={item.linkeDin}
        skyPe={item.skype}
        messs={item.messager}
        
        favorite={item.favorite}
        onDelete={() => onDelete(item.id)}
        StarFavor={() => StarFavor(item.id)}
        
        
        
       
        
        
      ></ContactItem>
    );
  });
  return (
   
    <Fragment>
       <SerchComponent></SerchComponent>
      <h2 className="col-7 d-flex justify-content-center">Contact</h2>
      {listIthem}
    </Fragment>
    
  );
};
export default ContactList;
