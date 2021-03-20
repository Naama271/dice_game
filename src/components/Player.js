
import './Game.css';
import React from 'react'

// function Player(props) {
//   return (
//     <div className="Player">
//         <h1>{this.prop.name}</h1>
//         <div className="score">total</div>
//         <div className="current_score">score</div>
//     </div>
//   );



class Player extends React.Component {
    render() {
        return (<div>
         

       

            <div className={"Player " + this.props.status}>
               <div></div>
                <div className="score">{this.props.total}</div>
                <div className="current_score">{this.props.current}</div>
            </div>
            <h4>{this.props.name}</h4>
            </div>
          );
    }
  }

export default Player;