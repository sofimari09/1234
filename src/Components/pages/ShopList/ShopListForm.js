import React, {useState, useEffect, useRef} from 'react'
//import axios from 'axios';
import "./ShopList.css";

function ShopListForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')

    };

   
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
            <>    
            <input 
            type="text" 
            placeholder="Оновіть назву продукту..." 
            value={input} 
            name="text" 
            className="todo-input edit"
            onChange={handleChange} 
            ref={inputRef}
            />
            <button className="todo-button edit">Оновити</button>
            
            </>
            ) : 
            ( 
            <>
            <input 
                type="text" 
                placeholder="Введіть назву продукту..." 
                value={input} 
                name="text" 
                className="todo-input"
                onChange={handleChange} 
                ref={inputRef}
                />
                <button className="todo-button">Додати</button>
                </>
                )}

            
        </form>
    )
}

export default ShopListForm