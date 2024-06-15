const Contacts = ({filteredList, newName, newNumber, toggleImportanceOf}) => {
  const label = person.important
    ? 'make not important' : 'make important'
  // Map over the filteredList array and render a div for each person
  const printNames = () => {
    return filteredList.map((person, index) => (
      <div key={index}>{person.name} {person.number}</div>
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
      <button onClick={toggleImportanceOf}>{label}</button>
    </div>
  )  
};

export default Contacts;