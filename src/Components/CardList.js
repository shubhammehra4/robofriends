import React, { Component } from 'react'
import Card from './Card';


class CardList extends Component {
    
    render() {
        const list = this.props.robots.map((robot) => (
        <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
        ));

        return (
            <div className='pa1'>
                {list}
            </div>
        )
    }
}

export default CardList;