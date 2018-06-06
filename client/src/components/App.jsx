import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {

    };
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