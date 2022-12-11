import { useState, FC } from 'react';
import { IPerson } from '../Interfaces';

interface Props {
    updateFriends(friend: IPerson): IPerson
}

const CreatePerson: FC<Props> = ({ updateFriends }: Props) => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);

    const addPerson = (): void => {
        const newPerson = {
            name,
            age
        };

        updateFriends(newPerson);

        setName("");
        setAge(0);
    }

    return (
        <>
            <h5>Create Person</h5>
            <div>
                <label>name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>age</label>
                <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
            </div>

            <button onClick={addPerson}>Add</button>
        </>
    );
}

export default CreatePerson