import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../actions/counterActions'

const ByAmount = () => {
    const [amount, setAmount] = useState(0)
     const dispatch = useDispatch()
    const handleChange = (event) => {
        setAmount(Number(event.target.value))
    }
    const handleClick = () =>{
        dispatch(incrementByAmount(amount))
    }
    return (
        <div>
            <input value={amount} type='number' onChange={handleChange} />
            <button onClick={handleClick}>increment by amount</button>
        </div>
    )
}

export default ByAmount
