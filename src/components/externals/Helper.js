import Axios from "axios";
import globalStore from "../../store";

export function getClients() {
    Axios.get('http://localhost/gym/clients/get.php').then(res => {
        let gymClients = res.data;
        let action = {
            type: "REFRESH_GYM_CLIENTS",
            payload: {
                gymClients: gymClients,
            }
        }
        globalStore.dispatch(action);

    })

}

export function mouseLoad() {
    globalStore.dispatch({
        type: 'MOUSE_LOAD',
    })
}

export function getMonths() {
    Axios.get('http://localhost/gym/offers/get.php').then(res => {

        let action = {
            type: 'SET_MONTHS',
            months: res.data,
            delating: false,
        }
        globalStore.dispatch(action);
    });
}

export function getINOUTS() {
    Axios.get('http://localhost/gym/inouts/get.php').then(res => {
        let action = {
            type: 'SET_INOUTS',
            inouts: res.data,
        }
        globalStore.dispatch(action);
    });
}

export function getFinance() {
    Axios.get('http://localhost/gym/finance/get.php').then(res => {
        let action = {
            type: 'SET_FINANCE',
            inouts: res.data,
        }
        globalStore.dispatch(action);
    });
}