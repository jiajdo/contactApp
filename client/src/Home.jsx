import { useState } from "react";
import "./Home.css";
import Contacts from "./Components/Contacts.jsx";
import CreateContact from "./Components/Create-Contact";
import ViewContact from "./Components/View-Contact";

function Home() {
  const contacts = [
    {
      id: "1",
      name: "Jia",
      email: "jia@gmail.com",
    },
    {
      id: "2",
      name: "Alex",
      email: "alex@gmail.com",
    },
  ];

  return (
    <>
      <Contacts />
      <CreateContact />
      <ViewContact />
    </>
  );
}

export default Home;
