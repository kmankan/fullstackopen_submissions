import axios from "axios";

const PersonForm = ({
  persons, 
  newName, 
  newNumber, 
  setNewName, 
  setNewNumber, 
  setPersons, 
  handleNameChange, 
  handleNumberChange}) => {
  const addPerson = (event) => {
    event.preventDefault();
    if (newName.trim() !== '') {
      // use map to create an array of str names from the persons array of object
      const personsArray = persons.map(nameObject => nameObject.name);
      // check if newName is in the existing names array, if so create an alert and do not update state of persons
      if (personsArray.includes(newName)) {
        alert(`${newName} is already added to phonebook`);
        setNewName('');
        setNewNumber('');
      } else {
        // otherwise create a new object with new contact data
        const personObject = {
          name: newName,
          number: newNumber
        }
        axios
          // update the database
          .post('http://localhost:3001/persons', personObject)
          .then(response => {
            console.log(response)
            // update the persons array with the new entry
            setPersons([...persons, {name: newName, number: newNumber}]);
            // clear the input fields
            setNewName('');
            setNewNumber('');
          })
      }
    }
  }
  return (
    <form onSubmit={addPerson}>
      <div>
        name: 
        <input 
        value={newName} // The value of the input field is controlled by the 'newName' state
        onChange={handleNameChange} // When the input value changes, the 'handleNameChange' function is called
        />
      </div>

      <div>
        number: 
        <input 
        value={newNumber} // same as above but for newNumber
        onChange={handleNumberChange}
        />
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;