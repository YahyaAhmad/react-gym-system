import React, { Component } from 'react'
import Axios from 'axios';
import globalStore from '../../../../store';
import { getINOUTS } from '../../../externals/Helper';
import InOut from './InOut';

export default class InOuts extends Component {

    constructor(){
        super()
        this.state = {
            inOuts: [],
        }
    }

    componentDidMount(){
        globalStore.subscribe(() => {
            this.setState({
                inOuts: globalStore.getState().inouts,
            })
        })

        getINOUTS();
    }

    render() {
        let InOutsRender = this.state.inOuts.map( inout => {
            return <InOut key={inout.ID} data={inout}/>
        } );
        return (
            <table className="month-list">
                <tbody>
                    <tr className="table_header">
                        <td>#</td>
                        <td>Name</td>
                        <td>Date</td>
                        <td>Status</td>
                    </tr>
                    {InOutsRender}

                </tbody>

            </table>
        )
    }
}
