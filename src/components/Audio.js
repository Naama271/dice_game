import React from 'react'

class Audio extends React.Component {
    render() {
        return (<div>
         
         <audio controls>

  <source src="horse.mp3" type="audio/mpeg"></source>

</audio>

            </div>
          );
    }
  }

export default Audio;