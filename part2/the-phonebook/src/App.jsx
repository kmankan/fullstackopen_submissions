import { useEffect, useState } from 'react';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  // tracks state for names and numbers being input
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  // keep track of what is being typed in the filter field
  const [filterText, setFilterText] = useState('');
  // create a copy of the persons array which we can filter with the filterText input
  const [filteredList, setFilteredList] = useState([...persons]);

  // using the useEffect hook to update the filteredList state whenever the persons state changes
  // i.e. when a new person is added
  useEffect(() => {
    setFilteredList(persons);
  }, [persons]);

  // newName component rerenders and reflects any changes made to the input field
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  // newNumber component rerenders and reflects any changes made to the input field
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }
  
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
      // otherwise, update the persons array with the new entry
        setPersons([...persons, {name: newName, number: newNumber}]);
        // clear the input fields
        setNewName('');
        setNewNumber('');
      }
    }
  }

  const filterPersons = (event) => {
    event.preventDefault();
    // Update the filterText state with the current value of the input field
    setFilterText(event.target.value);
    // Store the current value of the input field in a variable for filtering
    const stringToFilterOn = event.target.value;
    // Filter the persons array based on the input value (case-insensitive)
    // check both the name and number arrays for a match
    const filteredArray = persons.filter((personObject) => {
        const lowerCaseName = personObject.name.toLowerCase();
        const findNumber = personObject.number;
        return (
          lowerCaseName.includes(stringToFilterOn.toLowerCase()) ||
          findNumber.includes(stringToFilterOn)
        )
      });
    // Update the filteredList state with the filtered array of persons
      setFilteredList(filteredArray);
  }

  // Map over the filteredList array and render a div for each person
  const printNames = () => {
    return filteredList.map((person, index) => (
      <div key={index}>{person.name} {person.number}</div>
    ))
  }

  return (
    <div>
      <h2>Phonebook</h2>
     <Filter 
      persons={persons}
      setFilteredList={setFilteredList}
      setFilterText={setFilterText}
      value={filterText}/>

      <h2>add a new</h2>
      {/* Form for adding a new person */}
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
      <h2>Numbers</h2>
      ...
      <div>debug-name: {newName}</div>
      <div>debug-number: {newNumber}</div>
      ...
      <br></br>
      <div>{printNames()}</div>
    </div>
  )
}

export default App