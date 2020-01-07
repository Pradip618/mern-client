import * as types from '../constants'

export const registerState = {
    name: '',
    email: '',
    password: '',
}

export default function loginReducer(state = registerState, action) {
    switch (action.type) {
        case types.CHANGE_REGISTER_INPUT:
            console.log(action, 'action')
            return { ...state, ...action.payload }
        default:
            console.log('Sorry No case found for this action!')
            return state
    }
}
