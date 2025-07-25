import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        createNotification(state, action){
            state = action.payload
            return state
        },
        clearNotification(state, action){
            state = ''
            return state
        }
    }
})

export const setNotification = (message, duration) => {
    return dispatch => {
        dispatch(createNotification(message));
        setTimeout(() => {
            dispatch(clearNotification())
        }, duration)
    }
}

export const {createNotification, clearNotification} = notificationSlice.actions
export default notificationSlice.reducer