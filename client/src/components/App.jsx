import React from 'react';
import Carousel from './Carousel.jsx';

class App extends React.Component { //keeping stateful for future need
  constructor(props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <div>
        <Carousel />
      </div>
    );
  }
}

export default App;
