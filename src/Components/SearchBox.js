import React, {Component} from 'react';

class SearchBox extends Component {
    render() {
        return(
            <div className='pa2 ma4'>
                <input
                    className='pa2 ba b--green bg-lightest-blue' 
                    type='search' 
                    placeholder='Search Robots' 
                    onChange={this.props.searchChange}
                />
            </div>
        );
    }
}

export default SearchBox;