import "./Game.css";
import React from "react";

class Player extends React.Component {
  render() {
    return (
      <div>
        <div className={"Player " + this.props.status}>
          <div className="score">{this.props.total}</div>
          <div className="current_score">{this.props.current}</div>
        </div>
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

export default Player;
