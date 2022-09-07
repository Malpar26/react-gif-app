//import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    /* const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async ( ) => {
        const newImages = await getGifs ( category );
        setImages ( newImages ) ;
        setIsLoading( false );
    }
                          

    useEffect(() => {
        //getGifs(category)
            //.then( newImages => setImages(newImages) );
        getImages();
    }, []) 
     */

    const { images, isLoading } = useFetchGifs( category );  

    return (
        <>
            <h3>{ category }</h3>

            {/* isLoading ? ( <h2>Cargando...</h2>): null */}
            { isLoading && ( <h2>Cargando...</h2> ) }

            <div className="card-grid">
                {
                images.map( ( image ) => ( 
                    /* <li key={ image.id }>{ title }</li> */
                    <GifItem key={ image.id }
                             //title={ image.title }
                             //url={ image.url }
                             { ...image}
                    />
                    
                ))}
            </div>
        </>
    )
}