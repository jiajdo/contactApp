// Renders the info of ONE individual contact
import React from "react";


const ViewContact = (props) => {
   const {id, name, email} = props.contact  
  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
      <div>
        <button
          style={{ backgroundColor: "#f55142", padding: 4, fontWeight: "bold" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ViewContact;
