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