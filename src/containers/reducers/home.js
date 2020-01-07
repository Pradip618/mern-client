import * as types from '../constants'

export const initialState = {
    name: '',
}

export default function HomeReducer(state = initialState, action) {
    switch (action.type) {
        case types.INITIAL_SETUP:
            name = 'Pradip Shrestha'
            console.log('HomePage Initial reducer setup')
            return state
        default:
            console.log('Sorry No case found for this action!')
            return state
    }
}
