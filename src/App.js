// create your App component here
import React, { Component } from 'react';

// import Timer from './Timer'
// import Controls from './Controls'

//no need to modify anything in this component
class App extends Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json)
        .then(people => this.setState({ peopleInSpace: people }))
    }
    

    render() {
        return (
          <div>
            Testing
          </div>
        );
      }
}

export default App