import React, { Component } from 'react';
import Axios from 'axios';

class MonthItem extends Component {

    constructor(){
        super()
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(){
        Axios.post('http://localhost/gym/offers/delete.php').then( () => {
            
        } )
        this.props.onDelete(this.props.month.ID)
    }
    
    render() {
        let index = this.props.index + 1;
        let month = this.props.month;
        return (
            <tr className='month-item'>
                <td>{index}</td>
                <td>{month.Duration}</td>
                <td>${month.Price}</td>
                <td><i onClick={this.deleteItem} class="fas fa-minus-square remove-button"></i></td>
            </tr>
        );
    }
}

export default MonthItem;