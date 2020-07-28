import { createStore } from 'redux'
import searchSlice from './components/searchSlice'


const store = createStore(searchSlice);

export default store;