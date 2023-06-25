import { Component } from "react";
import "./Dice.css"

class Dice extends Component {
    render() {
        return(
            <div className="dice_box">
                <i className={`fas fa-10x fa-dice-${this.props.num}`}></i>
            </div>
        );
    }
}

export default Dice;