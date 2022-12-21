import React, {useState, useEffect} from 'react'

import axios from 'axios';
import { useParams } from 'react-router-dom';


const RecipeDetail = () => {
    let [recipe, setRecipe] = useState([]);
    let id = useParams().id;

    useEffect(() => {
        const url = `/api/recipes/` + id;
        axios.get(url)
            .then(res => {
                setRecipe(res.data);
            })
            .catch(error => {
                console.log(error.response.statusText);
            });
    }, []);

    return(
        <>
            <h3>{recipe.title}</h3>
            <h3>{recipe.body}</h3>
        </>
    );
}

export default RecipeDetail
