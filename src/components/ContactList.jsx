import { nanoid } from 'nanoid'


export const ContactList = ({filteredArr}) => {
    
    return (
        <>
        <ul>
            {
            filteredArr.map(item => 
                <li key={nanoid()}>{item.name}: {item.number}</li>)
            }
        </ul>
        </>
    )
}