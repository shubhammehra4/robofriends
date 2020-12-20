import React, { Component } from 'react';
import { connect } from "react-redux";
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
};
const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
})

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            // searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({robots: users}))
            .catch(error => console.log(error));
    }
    
    // onSearchChange = (event) => {
    //     this.setState({searchfield: event.target.value});
    // }

    render() {
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot => (
            robot.name.toLowerCase().includes(searchField.toLowerCase())
        ))
        return !robots.length ? 
            <h1 className='tc red f2 ma2'>Loading...</h1>
            : (
                <div className='tc' >
                    <h1 className='f1 light-green ttu sans-serif '>Robo Friends</h1>
                    <SearchBox searchChange = {onSearchChange} />
                    <hr/>
                    <ErrorBoundary>
                        <Scroll>
                            <CardList robots ={filteredRobots}/>
                        </Scroll>
                    </ErrorBoundary>
                </div>
            );
    } 
        
}


export default connect(mapStateToProps, mapDispatchToProps)(App);