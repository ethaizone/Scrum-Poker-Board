import {
    SHOW_LOADING,
    HIDE_LOADING,
    SUCCESS,
    FAILURE,
    RESET_MESSAGE
} from '../constants/actionTypes'

const initialState = {
    loading: false,
    success: null,
    error: null,
    message: ''
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        case HIDE_LOADING:
            return {
                ...state,
                loading: false
            }
        case SUCCESS:
          return {
            ...state,
            success: true,
            error: false,
            message: payload
          }
        case FAILURE:
          return {
            ...state,
            success: false,
            error: true,
            message: payload
          }
        case RESET_MESSAGE:
          return {
            ...state,
            success: null,
            error: null,
            message: ''
          }
        default:
            return state
    }
}
