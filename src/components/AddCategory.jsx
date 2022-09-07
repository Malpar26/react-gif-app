import { useState } from "react"

//export const AddCategory = ({setCategories}) => {
export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length <= 1 ) return ;

        //setCategories( categorias => [inputValue, ...categorias]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value = { inputValue }
                onChange = { onInputChange }
            />
            <button onClick = { onSubmit }>Añadir</button>
        </form>
    )
}
