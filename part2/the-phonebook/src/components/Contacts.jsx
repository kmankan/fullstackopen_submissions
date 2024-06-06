const Contacts = ({filteredList, newName, newNumber, func}) => {
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
    </div>
  )  
};

export default Contacts;