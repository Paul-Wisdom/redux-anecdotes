import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterAnecdotes(state, action){
            state = action.payload
            return state
        }
    }
})
// const filterReducer = (state = initialState, action) => {
//     switch (action.type){
//         case 'FILTER':
//             return action.payload;
//         default:
//             return state
//     }
// }

// export const filterChangeActionCreator = (filter) => {
//     return {
//         type: 'FILTER',
//         payload: filter
//     }
// }

export const {filterAnecdotes} = filterSlice.actions
export default  filterSlice.reducer