import React from "react";

import DishCategoriesList from '../pages/DishCategoriesList'


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <DishCategoriesList />
            </div>
        )
    }
}

export default App;
