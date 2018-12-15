import React, { Component } from 'react';
import '../../../css/clients_tab.css';
import globalStore from '../../../store/index';
import Client from './clients_tab_components/Client'
import axios from 'axios';
import AddClientButton from './clients_tab_components/AddClientButton';
import { getClients } from '../../externals/Helper';

class ClientsTab extends Component {

    constructor() {
        super()
        this.state = {
            gymClients: [],
        }
    }

    componentWillMount() {
        globalStore.subscribe(() => {
            this.setState({
                gymClients: globalStore.getState().gymClients,
            })
        })
        getClients();


    }

    render() {
        let gymClients = this.state.gymClients;
        let gymClientsRender = "";
        gymClientsRender = gymClients.map(client => {
            return <Client key={client.ID} data={client} />
        })
        return (
            <div className="clients_tab gym_tab">
                <div className="clients_header">
                    <input placeholder="Search..."></input>
                    <AddClientButton />
                </div>
                <table>
                    <tbody>
                        <tr className="table_header">
                            <td>Full Name</td><td>Email</td><td>Exp. Date</td><td>QRCode</td><td>Remove</td>
                        </tr>
                        {gymClientsRender}

                    </tbody>
                </table>
                <div className="clients_footer">
                </div>
            </div>
        );
    }
}

export default ClientsTab;