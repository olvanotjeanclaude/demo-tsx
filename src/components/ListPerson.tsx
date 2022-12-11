import { IPerson } from '../Interfaces'
import Person from './Person'

type Props = {
    persons: Array<IPerson>
}

const ListPerson = ({ persons }: Props) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                persons.length > 0 && persons.map((person, index) => {
                    return <Person key={index} person={person} />
                })
            }
        </div>
    )
}

export default ListPerson;