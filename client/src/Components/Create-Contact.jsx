// Renders a form for the user to add a new contact

const CreateContact = () => {

const [contacts, setContacts] = useState([])

const getRequest = () => {
    fetch("http://localhost:8080/contacts")
      .then((response) => {
        console.log({response})
        return response.json();
      })
      .then((events) => {
        console.log({contacts})
        setContacts(contactss);
        console.log("Contacts fetched...",contacts);
      });
  };

  useEffect(() => {
    getRequest();
  }, []);

const handleSubmit = (e) =>{
    e.preventDefault()
}

  return (
    <div>
      <h2>Add Contact</h2>
      <form className="Form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" placeholder="Name"/>
      <label>Email</label>
      <input type="text" name="email" placeholder="Email"/>
      <label>Phone</label>
      <input type="text" name="phone" placeholder="Phone"/>
      <label>Notes</label>
      <input type="text" name="notes" placeholder="Notes"/>
      <button style={{backgroundColor: 'lightgreen', fontWeight: 'bold', padding: 4}}>Add</button>
      </form>
    </div>
    
  );
};

export default CreateContact;
