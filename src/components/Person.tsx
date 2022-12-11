import { IPerson } from "../Interfaces"

interface Props {
    person: IPerson
}

const Person = ({ person }: Props) => {
    return (
        <div className='card' style={{ border: "1px solid black" }}>
            <h4>{person.name} </h4>
            <p>Age: {person.age} </p>
        </div>
    )
}

export default Person