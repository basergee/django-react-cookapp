import React, {useState, useEffect} from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


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

    return (
        <>
            <Card bg={"light"}>
                <Card.Header className="fs-1">{recipe.title}</Card.Header>
                <Card.Body>
                    <Card.Text className="fs-3">
                        {recipe.body}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default RecipeDetail;
