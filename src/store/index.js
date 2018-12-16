import {createStore} from 'redux'
import reducer from '../reducer/index'

const initialState = {
  gymClients:[],
  months:[],
  inouts:[],
  finance:[],
}
const globalStore = createStore(reducer,initialState)
export default globalStore