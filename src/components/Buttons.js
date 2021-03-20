import './Game.css';
import React from 'react'

// function Button() {
//   return (
//     <button className="Button">
// Button
//     </button>
//   );
// }


class Buttons extends React.Component {

    roll = () => { 
        console.log("rolllll");
      }

      hold = () => { 
        console.log("hold");
      }

      new = () => { 
        console.log("new");
      }


    handleClick = () => {
    const buttons = ["new","hold","roll"];
    console.log(buttons);
 
    return buttons.map(button => <button  handleClick= {this.props.name} >{button}</button>)
  }
    

    render() {
      return   ( <div>
      <button className="Button" onClick={this.roll}> roll </button>
      <button className="Button" onClick={this.hold}> hold </button>
      <button className="Button" onClick={this.new}> new </button>
 
      </div> ) }
  }
  


export default Buttons;