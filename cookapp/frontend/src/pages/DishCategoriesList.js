import React, {useState, useEffect} from 'react'

import axios from 'axios';


const DishCategoriesList = () => {
    let [dishes, setDishList] = useState([])

    useEffect(() => {
        const url = `http://127.0.0.1:8000/api/dishes`;
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
                        (<li key={index}>{dish.title}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default DishCategoriesList;
