import { createSlice, current } from "@reduxjs/toolkit"
import * as anecdoteService from "../services/anecdoteService" ;
import { clearNotification, createNotification, setNotification } from "./notificationReducer";

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)
const anecSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const [anecdote] = state.filter(a => a.id === action.payload.id);
      console.log(current(anecdote), action.payload.id, current(state));

      const updatedAnecdote = { ...anecdote };
      updatedAnecdote.votes += 1
      return state.map(anecdote => anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote)
    },
    newAnecdote(state, action) {
      const newAnecdote = action.payload;
      return state.concat(newAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})
// const anecReducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)
//   switch(action.type){
//     case 'VOTE':
//       const [updatedAnecdote] = state.filter(a => a.id === action.payload.id);
//       updatedAnecdote.votes += 1;
//       return state.map(anecdote => anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote)
//     case 'NEW_ANEC':
//       const newAnecdote = asObject(action.payload.content);
//       return state.concat(newAnecdote)
//     default:
//       return state;
//   }
// }
// export const voteActionCreator = (anecdoteId) => {
//   return{
//     type: 'VOTE',
//     payload:{
//       id: anecdoteId
//     }
//   }
// }
// export const newAnecdoteActionCreator = (anecdote) => {
//   return{
//     type: 'NEW_ANEC',
//     payload:{
//       content: anecdote,
//     }
//   }
// }

export const initializeAnecdotes = () => {
  return async dispatch => {
    const response = await anecdoteService.getAnecdotes();
    const anecdotes = response.data
    console.log(anecdotes)
    dispatch(setAnecdotes(anecdotes))
  }
}
export const createNewAnecdote = (content) => {
  return async dispatch => {
    const response = await anecdoteService.createAnecdote(content);
    console.log(response);
    if (response.status === 201) {
      dispatch(newAnecdote(response.data))
      dispatch(setNotification(`You created new anecdote '${content}'`, 5000))
    }
    else {

      dispatch(setNotification(`An error occured`, 5000))
    }
  }
}
export const voteAnecdoteCreator = (anecdote) => {
  return async dispatch => {
    const response = await anecdoteService.voteAnecdote(anecdote.votes, anecdote.id, anecdote.content);
    console.log(response);
    if (response.status === 200) {
      dispatch(voteAnecdote({ id: anecdote.id }))
      dispatch(setNotification(`You voted anecdote '${anecdote.content}'`, 5000))
    }
    else {
      dispatch(setNotification(`An error occured`, 5000))
    }
  }
}
export const { voteAnecdote, newAnecdote, setAnecdotes } = anecSlice.actions
export default anecSlice.reducer