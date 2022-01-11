import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../actions/counterActions'

const Button = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(increment())
    }
    return (
        <button onClick={handleClick} >
            Increment
        </button>
    )
}

export default Button
