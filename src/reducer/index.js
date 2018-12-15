import Axios from "axios";

export default (state, action) => {
    switch(action.type){
        case 'REFRESH_GYM_CLIENTS':
            state.gymClients = action.payload.gymClients;
            break;
        case 'SET_GYM_CLIENT_INFO':
            state.scannedClient = action.payload.client;
            break;
        case 'SET_MONTHS':
            state.months = action.months;
            break;
        case 'ADD_CLIENT':
            state.gymClients.push(action.client);
            break;
        case 'DELETE_CLIENT':
            state.gymClients = arrayRemove(action.id,state.gymClients);
            state.mouseLoad = false;
            break;
        case 'MOUSE_LOAD':
            state.mouseLoad = true;
            break;
        case 'SET_INOUTS':
            state.inouts = action.inouts;
            break;
        default:
            return state;
    }
    return state
}

function arrayRemove(id,clients){
    for (var i = 0; i<clients.length; i++){
        if(clients[i].ID == id){
            clients.splice(i,1);
            return clients;
        }
    }
}

