import React, { Component } from 'react';
import Popup from '../../../externals/Popup';
import AddClientsForm from './AddClientsForm';

class AddClientButton extends Component {

    constructor(){
        super()
        this.state = {
            showClientPopup: false,
        }
    }
    showClientPopup() {
        this.setState({showClientPopup:true});
    }

    render() {
        return (
            <div className='add-clients-wrapper'>
                <div className=' button-wrapper'>
                    <i onClick={this.showClientPopup.bind(this)} className="fas fa-plus-square add-button"></i>
                    
                </div>
                <Popup isShown={this.state.showClientPopup} onClickOut={() => this.setState({showClientPopup:false})}>
                    <AddClientsForm onCreate={() => this.setState({showClientPopup:false})}/>
                </Popup>
            </div>

        );
    }
}

export default AddClientButton;