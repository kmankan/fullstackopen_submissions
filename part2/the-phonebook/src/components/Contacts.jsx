import RemoveContact from "./Delete";

const Contacts = ({filteredList, newName, newNumber, persons, setPersons}) => {
  // Map over the filteredList array and render a div for each person
  const printNames = () => {
    return filteredList.map((person, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '10px' }}>{person.name} {person.number}</span> 
      <RemoveContact 
        id={person.id}
        name={person.name}
        setPersons={setPersons}
        persons={persons}
      />
      </div>
    ))
  }
  return (
    <div>
      ...
      <div>debug-name: {newName}</div>
      <div>debug-number: {newNumber}</div>
      ...
      <br></br>
      <div>{printNames()}</div>
    </div>
  )  
};

export default Contacts;