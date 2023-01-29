import React from 'react'
import Button from './Button'

const Form = ({addTodo}) => {
    const onSubmit = (event) => {
        event.preventDefault();

        //currentTarget c'est le sélecteur de notre formulaire
    const todoText = event.currentTarget.elements.todo.value;
    addTodo(todoText);
    event.currentTarget.reset();
    }; 


    return (
        <form className="form-wrapper" onSubmit={onSubmit}>
            <input id="todo" className='input' type='text' placeholder="Ajouter une tâche."/>
            <Button type="submit">Ajouter</Button>
        </form>
    )
}

export default Form
