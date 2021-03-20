
import './Game.css';
import Player from './Player'
import React from 'react'
import Dice from './Dice'
import Audio from './Audio'


class Game extends React.Component {9
    constructor(props) {
      super(props);

      this.state = {
      dice:[1,2],
      player1:[{ total:0, current:0, status:"active" }],
      player2:[{total:0, current:0, status:"notactive"}],
      limit:100
    };
 }
componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }

  changePlayer= () =>{
    this.setState({player1:[{status: "notactive"}]});
    this.setState({player2:[{status: "active"}]});

  }


    roll = () => {

       let currentPlayer1 = this.state.player1[0].status;
       let currentPlayer2 = this.state.player2[0].status;

              console.log(currentPlayer1)
     console.log(currentPlayer2)

       let int1 = Math.floor(Math.random()* 6)+1;
       let int2 = Math.floor(Math.random()* 6)+1;
        this.setState({dice:[int1,int2]});
   // console.log(this.state.dice);

        let sum = int1 + int2;
        this.setState({player1:[{total: this.state.player1[0].total + sum , current:sum}]});

        if (this.state.player1[0].total > this.state.limit){
            alert("this winner is 1")
            this.new()
        }

        if (int2 === 6 && int2 === 6){
           
            console.log("2* 6 dice!!")
            this.setState({dice:[int1,int2]});
            this.changePlayer()
      
        }
      }

      new = () => {

         this.setState({player1:[{total: 0, current:0}]});
         this.setState({player2:[{total: 0, current:0}]});
         this.setState({dice:[1,1]});
       }

       hold = () => {
         this.setState({player1:[{total: this.state.player1[0].current, current:0}]});
       }


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
            <button className="Button" onClick={this.roll}>
              {" "}
              roll{" "}
            </button>

            <div className="cubes">
              <Dice number={this.state.dice[0]} name={this.state.dice[0]} />
              <Dice number={this.state.dice[1]} name={this.state.dice[1]} />
            </div>
            <button className="Button" onClick={this.hold}>
              {" "}
              hold{" "}
            </button>
            <button className="Button" onClick={this.new}>
              {" "}
              new{" "}
            </button>
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