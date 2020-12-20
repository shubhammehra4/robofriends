import React, { Component } from 'react';
import { connect } from "react-redux";
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
});

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => (
            robot.name.toLowerCase().includes(searchField.toLowerCase())
        ))
        return isPending ? 
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