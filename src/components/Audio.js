import React from 'react'

class Audio extends React.Component {


    
    render() {
        return (<div>
            <audio controls autoPlay>
              <source src="horse.mp3"></source>
            </audio>
          </div>
          );
    }
  }
 
export default Audio;