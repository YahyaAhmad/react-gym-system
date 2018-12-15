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
        default:
            return state;
    }
    return state
}

