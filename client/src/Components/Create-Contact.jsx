// Renders a form for the user to add a new contact

const CreateContact = () => {
  return (
    <div>
      <h2>Add Contact</h2>
      <form className="Form">
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
