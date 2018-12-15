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
        this.searchClient = this.searchClient.bind(this)
    }

    componentDidMount() {
        globalStore.subscribe(() => {
            this.setState({
                gymClients: globalStore.getState().gymClients,
            })
        })
        getClients();
    }
    
    searchClient(event){
        let value = event.target.value;
        let gymClients = globalStore.getState().gymClients;
        value = value.toLowerCase();
        let filteredGymClients = gymClients.filter( client => {
            if(client.Full_Name.toLowerCase().search(value)!=-1){
                return true;
            } else {
                return false;
            }
        } )
        this.setState({
            gymClients: filteredGymClients,
        })
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
                    <input onChange={this.searchClient} placeholder="Search..."></input>
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