
import './Game.css';
import React from 'react'


class Dice extends React.Component {
    render() {
        return ( < div className={"Dice dice" +this.props.number}>
</div>  );
    }
  }

export default Dice;