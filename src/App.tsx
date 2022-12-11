import { FC, useState } from 'react';
import CreatePerson from './components/CreatePerson';
import ListPerson from './components/ListPerson';
import { IPerson } from './Interfaces';

const App: FC = () => {
  const [persons, setPersons] = useState<Array<IPerson>>([]);

  const updatePersons = (person: IPerson): IPerson => {
    setPersons([...persons,person]);
    return person;
  }

  return (
    <div className="App">
      <CreatePerson updateFriends={updatePersons} />

      <ListPerson persons={persons} />
    </div>
  );
}

export default App;
