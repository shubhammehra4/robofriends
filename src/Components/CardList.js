import React, { Component } from 'react'
import Card from './Card';
import robots from './robots';

class CardList extends Component {
    render() {
        const list = robots.map((robot) => (<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />))

        return (
            <div className='pa1'>
                {list}
            </div>
        )
    }
}

export default CardList;