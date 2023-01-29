import React, {useState} from 'react'

const AddToDo = (props) => {
    //implémenter la liste de todo
    const [item, setItem] = useState('');

    //changer la valeur au clic
    //va prendre un parametre et un event
    const handleChange = (e) => {
        setItem(e.target.value)
    }

    //const pr gerer la soumission
    const handleSubmit = (e) => {
        e.preventDefault()
        props.item(item)
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <input type="text" name="item"  value={item} onChange={handleChange} placeholder="Ajouter une tâche."/>
            <button>Ajouter</button>
        </form>
    )
}

export default AddToDo