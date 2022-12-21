import React, {useState, useEffect} from 'react'

import axios from 'axios';
import {Link} from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';


const DishCategoriesList = () => {
    let [dishes, setDishList] = useState([])

    useEffect(() => {
        const url = `/api/dishes`;
        axios.get(url)
            .then(res => {
                setDishList(res.data);
            })
            .catch(error => {
                console.log(error.response.statusText);
            });
    }, []);

    return (
        <div className="dishes-list">
            <ListGroup>
                {dishes.map( (dish, index) =>
                    (<ListGroup.Item action key={index}>
                        <Link to={'dishes/' + dish.id}>{dish.title}</Link>
                    </ListGroup.Item>) )
                }
            </ListGroup>
        </div>
    )
}

export default DishCategoriesList;
