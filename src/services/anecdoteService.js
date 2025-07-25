import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes'

const getAnecdotes = () => {
    return axios.get(baseUrl)
}

const createAnecdote = (content) => {
    return axios.post(baseUrl, {
        content,
        votes: 0
    })
}

const voteAnecdote = (votes, id, content) => {
    return axios.put(`${baseUrl}/${id}`, {
        votes: votes + 1,
        content: content
    })
}

export {getAnecdotes, createAnecdote, voteAnecdote}