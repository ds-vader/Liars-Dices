import React from 'react'
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'react-bootstrap-icons'

class LiarsDices extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            diceCount: 5,
            dices: []
        }
    }

    random = () => this.setState({dices: [...new Array(this.state.diceCount)].map(() => Math.floor(Math.random() * 6) + 1)});

    render () {
        return <div className='wrapper'>
            {
                this.state.dices.map(item => 
                    item === 1 ? <Dice1/> :
                    item === 2 ? <Dice2/> :
                    item === 3 ? <Dice3/> :
                    item === 4 ? <Dice4/> :
                    item === 5 ? <Dice5/> :
                    item === 6 ? <Dice6/> : <div></div>
                )
            }
            <button onClick={() => this.random()}>roll</button>
            {
                this.state.diceCount === 1 ? <button onClick={() => this.setState({diceCount: 5, dices: [...new Array(5)].map(() => Math.floor(Math.random() * 6) + 1) })}>go to 5</button> :
                    <button onClick={() => this.setState({diceCount: this.state.diceCount - 1, dices: this.state.dices.filter((_, i) => i !== 0)})}>-1</button>
            }
        </div>
    }
}

export default LiarsDices
