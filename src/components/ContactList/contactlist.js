import React, { Fragment } from "react";
import ContactItem from "./ContactItem/contactitem";
import "./contactlist.css";

import SerchComponent from "../SerchComponent/search";

const ContactList = ({ ContactList }) => {
  console.log("console", ContactList);
  const listItem = ContactList.map(item => {
    return (
      <ContactItem
        type={item.type}
        placeUa={item.placeUa}
        fullAddressUa={item.fullAddressUa}
      ></ContactItem>
    );
  });
  return (
    <Fragment>
      <SerchComponent></SerchComponent>

      <h2>Banks Info</h2>
      {listItem}
    </Fragment>
  );
};
export default ContactList;
