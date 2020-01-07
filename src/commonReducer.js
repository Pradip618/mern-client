import { combineReducers } from 'redux'
import HomeReducer from './containers/reducers/home'
import LoginReducer from './containers/reducers/Login'
export default combineReducers({
    HomeReducer,
    LoginReducer,
})
