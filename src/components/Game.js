import "./Game.css";
import Player from "./Player";
import React from "react";
import Dice from "./Dice";
import Audio from "./Audio";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dice: [1, 2],
      player: [
        { total: 0, current: 0, status: "active" },
        { total: 0, current: 0, status: "notactive" },
      ],
      limit: 100,
    };
  }
  changeValue = (event) => {
    this.setState({ limit: event.target.value });
  };

  changePlayer = () => {
    this.setState({ player: [{ status: "notactive" }, { status: "active" }] });
  };

  roll = () => {

    console.log(this.state.player);

    let int1 = Math.floor(Math.random() * 6) + 1;
    let int2 = Math.floor(Math.random() * 6) + 1;
    this.setState({ dice: [int1, int2] });

    console.log(this.state.player.status);

    let sum = int1 + int2;
    this.setState({
      player: [{ total: this.state.player[0].total + sum, current: sum }],
    });

    if (this.state.player[0].total > this.state.limit) {
      alert("this winner is");
      this.new();
    }

    if (int2 === 6 && int2 === 6) {
      console.log("2* 6 dice!!");
      this.setState({ dice: [int1, int2] });
      this.changePlayer();
    }
  };

  new = () => {
    this.setState({ player: [{ total: 0, current: 0 }] });
    this.setState({ player2: [{ total: 0, current: 0 }] });
    this.setState({ dice: [1, 1] });
  };

  hold = () => {
    this.setState({
      player: [{ total: this.state.player[0].current, current: 0 }],
    });
  };

  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div className="Game">
        <Player
          name="player 1"
          total={this.state.player[0].total}
          current={this.state.player[0].current}
          status={this.state.player[0].status}
          
        />
        <div>
          <button className="Button" onClick={this.new}>
            {" "}
            new{" "}
          </button>

          <div className="cubes">
            <Dice number={this.state.dice[0]} name={this.state.dice[0]} />
            <button className="Button" onClick={this.roll}>
              {" "}
              roll{" "}
            </button>
            <Dice number={this.state.dice[1]} name={this.state.dice[1]} />
          </div>
          <button className="Button" onClick={this.hold}>
            {" "}
            hold{" "}
          </button>
          <form>
            {" "}
            <input type="number" onChange={this.changeValue} />{" "}
          </form>
          <Audio />
        </div>
        <Player
          name="player 2"
          // total={this.state.player[1].total}
          // current={this.state.player[1].current}
          // status={this.state.player[1].status}
        />
      </div>
    );
  }
}

export default Game;
