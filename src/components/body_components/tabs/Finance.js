import React, { Component } from 'react'
import { getFinance } from '../../externals/Helper';
import globalStore from '../../../store';
import FinanceItem from './finance_tab_components/FinanceItem';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class Finance extends Component {

    constructor() {
        super()
        this.state = {
            finance: [],
            fromDate: null,
            toDate: null,
        }

        this.handleDateChange = this.handleDateChange.bind(this)
        this.removeFilter = this.removeFilter.bind(this)
        this.filterFinance = this.filterFinance.bind(this)
    }

    componentDidMount() {
        globalStore.subscribe(() => {
            this.setState({
                finance: globalStore.getState().finance,
            })
        })
        getFinance();
    }

    validateDate(state){
        if(state.fromDate && state.toDate){
            if(state.fromDate >= state.toDate){
                state.toDate = state.fromDate;
            }
        }
        return state;
        
    }

    handleDateChange(date,type){
        let state = this.state;
        state[type] = date;
        state = this.validateDate(state);
        this.setState(state);
    }

    removeFilter(){
        this.setState({
            toDate: null,
            fromDate: null,
        })
    }

    filterFinance(finance){
        let {toDate,fromDate} = this.state;

        let filteredFinanceItems = finance.filter( item => {
            var date = new Date(item.Date);
            if( !fromDate || (date >= fromDate && (!toDate || date <= toDate)) ) 
                return true;
            return false;
        } )

        let financeItems = filteredFinanceItems.map(financeItem => {
            return <FinanceItem key={financeItem.id} data={financeItem} />
        })

        if(!fromDate) return financeItems;

        

        return financeItems;
    }


    render() {
        console.log(this.state)
        let { finance, fromDate, toDate } = this.state
        let financeRender = this.filterFinance(finance);
        return (
            <div class="gym_tab finance_tab">
                <div className="clients_header">
                    <DatePicker dateFormat="yyyy/MM/dd" selected={fromDate} onChange={date => this.handleDateChange(date,'fromDate')}/>
                    <DatePicker dateFormat="yyyy/MM/dd" selected={toDate} onChange={date => this.handleDateChange(date,'toDate')}/>
                    <i onClick={this.removeFilter} className="fas fa-times-circle"></i>
                </div>
                <table>
                    <tbody>
                        <tr className="table_header">
                            <td>#</td>
                            <td>Name</td>
                            <td>Months</td>
                            <td>Price</td>
                            <td>Date</td>
                        </tr>
                        {financeRender}

                    </tbody>

                </table>
            </div>
        )
    }
}
