// Renders a list with all your contacts.
import { useState } from "react";
import ViewContact from "./View-Contact";



const Contacts = (props) => {
const renderContacts = props.contacts.map((contact) => {
return (
   <ViewContact contact={contact}></ViewContact>
)
})
  return (
    <div>
      {renderContacts}
    </div>
  );
};

export default Contacts;
