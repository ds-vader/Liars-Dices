import React, { useState } from 'react'
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'react-bootstrap-icons'

const LiarsDices = () => {
    //const random = () => [...new Array(length)].map(() => Math.floor(Math.random() * 6) + 1);

    const [state, setState] = useState({count : 5});

    const random = () => {return [...new Array(state.count)].map(() => Math.floor(Math.random() * 6) + 1)}

    return (
        <div className='wrapper'>
            {random().map(item => 
                    item === 1 ? <Dice1/> :
                    item === 2 ? <Dice2/> :
                    item === 3 ? <Dice3/> :
                    item === 4 ? <Dice4/> :
                    item === 5 ? <Dice5/> :
                    item === 6 ? <Dice6/> : <div></div>
                )}
            <button onClick={() => setState(({count}) => ({ count: count}))}>roll</button>
            {
                state.count === 1 ? <button onClick={() => setState(() => ({ count: 5 }))}>go to 5</button> :
                    <button onClick={() => setState(({count}) => ({ count: count - 1 }))}>-1</button>
            }
        </div>
    )

}

export default LiarsDices
