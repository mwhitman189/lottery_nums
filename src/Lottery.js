import React, { Component } from 'react'
import Ball from './Ball'
import './Lottery.css'


class Lottery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nums: Array.from({length: this.props.numBalls}),
        }
        this.handleClick = this.handleClick.bind(this)
    }

    static defaultProps = {
        title: "Lotto",
        numBalls: "6",
        maxNum: 99,
    }

    getRandom() {
        return Math.floor(Math.random() * this.props.maxNum)
    }

    handleClick() {
        let newArray = []
        const newNums = this.state.nums.map(num => {
            newArray.push(this.getRandom())
        })
        this.setState({nums: newArray})
    }

    render () {
        return (
            <div className="Lottery">
                <div>
                    <h2>{this.props.title}</h2>
                    <div className="Lottery__nums">
                        {this.state.nums.map(n => <Ball num={n} />)}
                    </div>
                    <button onClick={this.handleClick}>Show me a winner</button>
                </div>
            </div>
        )
    }
}

export default Lottery