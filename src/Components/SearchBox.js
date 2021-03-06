import React from "react";

function SearchBox({ searchChange }) {
    return (
        <div className="pa2 ma4">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search Robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
