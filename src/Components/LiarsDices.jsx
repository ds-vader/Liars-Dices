import React, { useState } from 'react'
import './LiarsDices.css'

import { Button } from 'react-bootstrap'
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6Fill, ArrowClockwise } from 'react-bootstrap-icons'

const LiarsDices = () => {
    //dice count
    const [state, setState] = useState({ count: 5 });

    //get random array
    const random = () => {
        return [...new Array(state.count)]  //create new array
            .map(() => Math.floor(Math.random() * 6) + 1)   //fill with number 1-6 (dice dots)
            .sort(function (a, b) { return a - b }) //sort from min to max 
    }      

    return (
        <div className='wrapper'>
            <div className='dices'>
                {random().map(item =>
                    item === 1 ? <Dice1 className='dice' /> :
                        item === 2 ? <Dice2 className='dice' /> :
                            item === 3 ? <Dice3 className='dice' /> :
                                item === 4 ? <Dice4 className='dice' /> :
                                    item === 5 ? <Dice5 className='dice' /> :
                                        item === 6 ? <Dice6Fill className='dice' /> : <div></div>
                )}
            </div>
            <div className='controls'>
                <div id='reroll'
                    onClick={() => setState(({ count }) => ({ count: count }))}>
                    <ArrowClockwise id='clockwise' />
                </div>
                {
                    state.count === 1 ? 
                    <div><Button className='minus' variant='dark' 
                        onClick={() => setState(() => ({ count: 5 }))}>
                            Back to five</Button> </div> :
                        
                    <div ><Button className='minus' variant='dark' 
                        onClick={() => setState(({ count }) => ({ count: count - 1 }))}>
                                Lose one die</Button> </div>
                }
            </div>
        </div>
    )

}

export default LiarsDices
