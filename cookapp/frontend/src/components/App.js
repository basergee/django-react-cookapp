import React from "react";

import {
  HashRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import DishCategoriesList from '../pages/DishCategoriesList'
import DishCategory from '../pages/DishCategory'
import RecipeDetail from '../pages/RecipeDetail'


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <h1>Main Page</h1>
                    <Routes>
                        <Route path='/dishes/:id/' element={<DishCategory />} />
                        <Route path='/recipes/:id' element={<RecipeDetail />} />
                        <Route path='/' element={<DishCategoriesList />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default App;
