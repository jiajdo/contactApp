//Renders a list with all contacts

import { useState } from "react";
import ViewContact from "./View-Contact";
import CreateContact from "./Create-Contact";


const Contacts = (props) => {
    console.log({props}, 'contacts props')
  const renderContacts = props.contacts.map((contact) => {
    console.log({contact})
    return <ViewContact contact={contacts}></ViewContact>;
  });
  return <div>{renderContacts}</div>;
};

export default Contacts;
