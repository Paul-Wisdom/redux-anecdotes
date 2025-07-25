import { useDispatch } from "react-redux";
// import { newAnecdoteActionCreator } from "../reducers/anecdoteReducer";
import { createNewAnecdote, newAnecdote } from "../reducers/anecdoteReducer";
import { clearNotification, createNotification } from "../reducers/notificationReducer";
import { createAnecdote } from "../services/anecdoteService";

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const addAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.content.value;
        dispatch(createNewAnecdote(content))
        e.target.content.value = ''
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <input name='content' />
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm