import React, { useState, useEffect } from "react";
import SearchBox from "../Components/SearchBox";
import CardList from "../Components/CardList";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => setRobots(users))
            .catch((error) => console.log(error));
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    if (!robots.length)
        return (
            <div className="tc">
                <h1 className="courier red f1 ma2 mt4">Loading...</h1>
            </div>
        );

    const filteredRobots = robots.filter((robot) =>
        robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
        <div className="tc">
            <h1 className="f1 light-green ttu sans-serif ">Robo Friends</h1>
            <SearchBox searchChange={onSearchChange} />
            <hr />
            <ErrorBoundary>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </ErrorBoundary>
        </div>
    );
}

export default App;
