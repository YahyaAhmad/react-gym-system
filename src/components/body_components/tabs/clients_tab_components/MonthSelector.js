import React, { Component } from 'react';
import globalStore from '../../../../store';

class MonthSelector extends Component {
    constructor(){
        super()
        this.state = {
            months:[],
        }
    }
    componentWillMount(){
        globalStore.subscribe(() => {
            this.setState({
                months: globalStore.getState().months,
            })
        })
    }
    render() {
        let options = this.state.months.map( item => {
            return <option value={item.ID} duration={item.Duration} key={item.ID}>{item.Duration} Months</option>
        } )
        return (
            <div class="month-selector-wrapper">
                <label>Months:</label>
                <select onChange={this.props.onChange} className="month-selector">
                    <option value='none'>- None -</option>
                    {options}
                </select>
            </div>
        );
    }
}

export default MonthSelector;