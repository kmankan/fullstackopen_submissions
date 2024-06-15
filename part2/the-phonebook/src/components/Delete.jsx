import contactServices from '../services/contacts'

const RemoveContact = ({id, name, setPersons, persons}) => {
  const deleteThisPerson = (event) => {
    event.preventDefault();
    console.log(id, name)
    if (window.confirm(`Delete ${name}?`)) {
      contactServices
        .deleteContact(id)
        .then(returnedObject => {
          // check the correct object was added
          console.log('deleted: ', returnedObject);
          // update the person array to remove the deleted entry
          setPersons(persons.filter(person => person.id !== id));
    })}
  };

  return (
      <div>
        <button onClick={deleteThisPerson}>delete</button>
      </div>  
  );
};

export default RemoveContact;