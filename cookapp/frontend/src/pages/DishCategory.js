import React, {useState, useEffect} from 'react'

import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const DishCategory = () => {
    let [recipes, setRecipesList] = useState([]);
    let id = useParams().id;

    useEffect(() => {
        const url = `/api/dishes/` + id;
        axios.get(url)
            .then(res => {
                setRecipesList(res.data);
            })
            .catch(error => {
                console.log(error.response.statusText);
            });
    }, []);

    return(
        <div>
            <h3>List of recipes in this category</h3>
            <div className="recipes-list">
                <ul>
                    {recipes.map( (recipe, index) =>
                        (<li key={index}>
                            <Link to={'recipes/' + recipe.id}>{recipe.title}</Link>
                        </li>) )
                    }
                </ul>
            </div>
        </div>
    );
}

export default DishCategory;
