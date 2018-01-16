import {
    SHOW_LOADING,
    HIDE_LOADING,
    SUCCESS,
    FAILURE,
    RESET_MESSAGE
} from '../constants/actionTypes'

export const showLoading = () => ({
    type: SHOW_LOADING
})

export const hideLoading = () => ({
    type: HIDE_LOADING
})

export const success = (message) => ({
  type: SUCCESS,
  payload: message
})

export const failure = (message) => ({
  type: FAILURE,
  payload: message
})

export const resetMessage = () => ({
  type: RESET_MESSAGE
})
