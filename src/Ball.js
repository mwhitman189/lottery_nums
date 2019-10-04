import React, { Component } from 'react'
import './Ball.css'


class Ball extends Component {
    render () {
        return (
            <div className="Ball__stage">
                <figure className="Ball">
                    <p>{this.props.num}</p><span className="Ball__shadow"></span>
                </figure>
            </div>
        )
    }
}

export default Ball