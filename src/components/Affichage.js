import React from 'react'
import { useSelector } from 'react-redux'

const Affichage = () => {
    // useSelector = store.getState()
    const counter = useSelector(state=>state.counterReducer.counter)
    return (
        <div>
            {counter}
        </div>
    )
}

export default Affichage
