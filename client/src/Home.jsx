import { useState } from 'react'
import './Home.css'
import Contacts from './Components/Contacts.jsx'
import CreateContact from './Components/Create-Contact'
import ViewContact from './Components/View-Contact'


function Home() {
  
  return (
  <>
  Hello from Home
   <Contacts />
   <CreateContact />
   <ViewContact />
   
 </>
  )
}

export default Home
