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

    generateNums() {
        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }))
    }

    handleClick() {
        this.generateNums()
    }

    render () {
        return (
            <div className="Lottery">
                <div className="Lottery__container__border">
                    <div className="Lottery__container">
                        <h2>{this.props.title}</h2>
                        <div className="Lottery__nums">
                            {this.state.nums.map(n => <Ball num={n} />)}
                        </div>
                        <button onClick={this.handleClick}>Show me a winner</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lottery