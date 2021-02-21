import React from 'react'
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'react-bootstrap-icons'

class LiarsDices extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            diceCount: 5
        }
    }

    random = () => {return [...new Array(this.state.diceCount)].map(() => Math.floor(Math.random() * 6) + 1)}

    render () {
        return <div className='wrapper'>
            {
                this.random().map(item => 
                    item === 1 ? <Dice1/> :
                    item === 2 ? <Dice2/> :
                    item === 3 ? <Dice3/> :
                    item === 4 ? <Dice4/> :
                    item === 5 ? <Dice5/> :
                    item === 6 ? <Dice6/> : <div></div>
                )
            }
            <button onClick={() => this.setState({diceCount: this.state.diceCount})}>roll</button>
            {
                this.state.diceCount === 1 ? <button onClick={() => this.setState({diceCount: 5})}>go to 5</button> :
                    <button onClick={() => this.setState({diceCount: this.state.diceCount - 1})}>-1</button>
            }
        </div>
    }
}

export default LiarsDices
