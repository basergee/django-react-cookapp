import React, {useState, useEffect} from 'react'

import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


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

    return (
        <Row xs={1} lg={4} md={3} sm={2} className="g-4">
            {recipes.map( (recipe, index) =>
                (
                    <Col key={recipe.id}>
                        <Card bg={"light"} style={{ width: '18rem' }} className="mb-5">
                            <Card.Header>{recipe.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {recipe.body.substring(0, 20) + '...'}
                                </Card.Text>
                                <Link to={'/recipes/' + recipe.id}>Посмотреть</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    );
}

export default DishCategory;
