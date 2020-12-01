import React, { Component } from 'react';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';

class App extends Component {
    render() {
        return (
            <div className='tc bg-light-blue' >
                <h1 className='f1 ttu helvetica'>Robo Friends</h1>
                <SearchBox />
                <hr/>
                <CardList />
            </div>
        );
    }
}

export default App;