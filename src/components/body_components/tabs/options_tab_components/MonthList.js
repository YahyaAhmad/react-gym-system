import React, { Component } from 'react';
import Axios from 'axios';
import globalStore from '../../../../store';
import MonthItem from './MonthItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { getMonths } from '../../../externals/Helper';


class MonthList extends Component {
    constructor() {
        super()
        this.state = {
            months: [],
        }
        this.itemWasDeleted = this.itemWasDeleted.bind(this)
    }
    
    itemWasDeleted(key) {
        let months = this.state.months;
        months = this.deleteFromArray(months, key);
        let action = {
            type: 'SET_MONTHS',
            months: months,
        }
        globalStore.dispatch(action);
    }

    deleteFromArray(months, key) {
        for (var i = 0; i < months.length; i++) {
            if (months[i].ID == key) {
                months.splice(i, 1);
                return months;
            }
        }
    }

    componentDidMount() {
        globalStore.subscribe(() => {
            this.setState({
                months: globalStore.getState().months,
            })
        })
        getMonths();

    }


    render() {
        console.log(this.state.months)
        let months = this.state.months;
        let monthRender = months.map((item, index) => {
            return (

                <MonthItem className={this.state.delating ? 'deleting' : ''} onDelete={this.itemWasDeleted} month={item} key={item.ID} index={index} />

            )
        })
        return (
            <table className="month-list">
                <tbody>
                    <tr className="table_header">
                        <td>#</td>
                        <td>Duration</td>
                        <td>Price</td>
                        <td>Delete</td>
                    </tr>
                        {monthRender}

                </tbody>

            </table>

        );
    }
}

export default MonthList;