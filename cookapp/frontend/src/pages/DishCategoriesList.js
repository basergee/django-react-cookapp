import React, {useState, useEffect} from 'react'

import axios from 'axios';
import {Link} from "react-router-dom";


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
        <div>
            <h3>Here go dishes</h3>
            <div className="dishes-list">
                <ul>
                    {dishes.map( (dish, index) =>
                        (<li key={index}>
                            <Link to={'dishes/' + dish.id}>{dish.title}</Link>
                        </li>) )
                    }
                </ul>
            </div>
        </div>
    )
}

export default DishCategoriesList;
