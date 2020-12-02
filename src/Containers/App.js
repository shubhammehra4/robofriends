import React, { Component } from 'react';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({robots: users}))
            .catch(error => console.log(error));
    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => (
            robot.name.toLowerCase().includes(searchfield.toLowerCase())
        ))
        return !robots.length ? 
            <h1 className='tc red f2 ma2'>Loading...</h1>
            : (
                <div className='tc' >
                    <h1 className='f1 light-green ttu sans-serif '>Robo Friends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <hr/>
                    <ErrorBoundary>
                        <CardList robots ={filteredRobots}/>
                    </ErrorBoundary>
                </div>
            );
    } 
        
}


export default App;