import "./Game.css";
import Player from "./Player";
import React from "react";
import Dice from "./Dice";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dice: [1, 2],
      player1: [{ total: 0, current: 0, status: "active" }],
      player2: [{ total: 0, current: 0, status: "notactive" }],
      limit: 100,
    };
  }
  changeValue = (event) => {
    this.setState({ limit: event.target.value });
  };

  changePlayer = () => {
    if (this.state.player1[0].status === "active") {
      this.setState({
        player2: [
          {
            total: this.state.player2[0].total,
            current: this.state.player2[0].total,
            status: "active",
          },
        ],
      });
 
      this.setState({
        player1: [
          {
            total: this.state.player1[0].total,
            current: this.state.player1[0].total,
            status: "notactive",
          },
        ],
      });

    }

    if (this.state.player2[0].status === "active") {
      this.setState({
        player2: [
          {
            total: this.state.player2[0].total,
            current: this.state.player2[0].total,
            status: "notactive",
          },
        ],
      });
      console.log(this.state.player2[0].total);
      this.setState({
        player1: [
          {
            total: this.state.player1[0].total,
            current: this.state.player1[0].total,
            status: "active",
          },
        ],
      });
      console.log(this.state.player1[0].total);
    }
  };

  roll = () => {
    let int1 = Math.floor(Math.random() * 6) + 1;
    let int2 = Math.floor(Math.random() * 6) + 1;
    this.setState({ dice: [int1, int2] });
    // console.log(this.state.dice);

    let sum = int1 + int2;

    if (this.state.player1[0].status === "active") {
      this.setState({
        player1: [
          {
            total: this.state.player1[0].total + sum,
            current: sum,
            status: "active",
          },
        ],
      });

      if (this.state.player1[0].total > this.state.limit) {
        alert("this winner is player 1!!!");
        this.new();
      }
      if (int1 === int2) {
        console.log("2* 6 dice!!");
        this.setState({ dice: [int1, int2] });
        this.changePlayer();
      }
    }

    if (this.state.player2[0].status === "active") {
      this.setState({
        player2: [
          {
            total: this.state.player2[0].total + sum,
            current: sum,
            status: "active",
          },
        ],
      });

      if (this.state.player2[0].total > this.state.limit) {
        alert("this winner is player 2!!!");
        this.new();
      }

      if (int1 === int2) {
        console.log("2* 6 dice!!");
        this.setState({ dice: [int1, int2] });
        this.changePlayer();
      }
    }
  };

  new = () => {
    this.setState({ player1: [{ total: 0, current: 0, status: "notactive" }] });
    this.setState({ player2: [{ total: 0, current: 0, status: "active" }] });
    this.setState({ dice: [1, 2] });
  };

  hold = () => {
      let sum= this.state.dice[0] + this.state.dice[1]
    this.setState({
      player1: [{ total: this.state.player1[0].total + sum, current: 0 }],
    });
    this.changePlayer();
    
    this.setState({
        player2: [{ total: this.state.player2[0].total + sum, current: 0 }],
      });
      this.changePlayer();
  };


  render() {
    return (
      <div className="Game">
        <Player
          name="player 1"
          total={this.state.player1[0].total}
          current={this.state.player1[0].current}
          status={this.state.player1[0].status}
        />
        <div>
          <button className="Button" onClick={this.new}>
            NEW GAME
          </button>

          <div className="cubes">
             
            <Dice number={this.state.dice[0]} name={this.state.dice[0]} />
                <button className="Button" onClick={this.roll}>
                ROLL
                </button>
            <Dice number={this.state.dice[1]} name={this.state.dice[1]} />
          </div>
            <button className="Button" onClick={this.hold}>
            HOLD
            </button> 
          <form>
            <input type="number" onChange={this.changeValue} placeholder="the winning score..."/> 
          </form>
        </div>
        <Player
          name="player 2"
          total={this.state.player2[0].total}
          current={this.state.player2[0].current}
          status={this.state.player2[0].status}
        />
      </div>
    );
  }
}

export default Game;
