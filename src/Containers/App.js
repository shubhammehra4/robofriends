import React, { Component } from 'react';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import robots from '../Components/robots';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots,
            searchfield: ''
        }
    }
    
    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({searchfield: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => (
            robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        ))
        return (
            <div className='tc' >
                <h1 className='f1 light-green ttu sans-serif '>Robo Friends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <hr/>
                <CardList robots ={filteredRobots}/>
            </div>
        );
    }
}

export default App;