import { Component } from "react";
import Dice from "./Dice";
import "./RoleDice.css";

class RoleDice extends Component {
    static defaultProps = {
        face: ["one", "two", "three", "four", "five", "six"]
    }

    constructor(props) {
        super(props);
        this.state = {
            dice1: "one",
            dice2: "one"
        }
        this.roll = this.roll.bind(this)
    }

    roll() {
        this.setState({dice1: this.props.face[Math.floor(Math.random() * this.props.face.length)]});
        this.setState({dice2: this.props.face[Math.floor(Math.random() * this.props.face.length)]});
    }

    render() {
        return(
            <div className="role_box">
                <div className="dices_container">
                    <Dice num={this.state.dice1}/>
                    <Dice num={this.state.dice2}/>
                </div>
                <button onClick={this.roll} className="role-button">Role dices</button>
            </div>
        );
    }
}

export default RoleDice;