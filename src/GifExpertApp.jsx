import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories]  = useState(['Lebowsky']);

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory)) return;
        //setCategories([ 'Cheech & Chong', ...categories ]);
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={setCategories} 
                onNewCategory={e => onAddCategory(e)}
            />

            {
            categories.map( category => (
                /* <div key={ category }>
                    <h3>{ category }</h3>
                    <li>{ category }</li>
                </div> */
                <GifGrid 
                    key={ category }
                    category = { category }
                />
            ))
            }
        </>
    )
}