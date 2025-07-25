import { useDispatch, useSelector } from "react-redux"
//import { voteActionCreator } from "../reducers/anecdoteReducer"
import { voteAnecdote, voteAnecdoteCreator } from "../reducers/anecdoteReducer"
import { createNotification, clearNotification } from "../reducers/notificationReducer"
const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter, notification }) => {
    console.log(anecdotes);
    
    return [...anecdotes].sort((a, b) => b.votes - a.votes).filter(anec => anec.content.includes(filter))
  })
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(voteAnecdoteCreator(anecdote))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList