import React from 'react';
import ReactDOM from 'react-dom';
import CarouselList from './CarouselList.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    const carouselMain = {
      position: 'fixed',
      //overflow: 'scroll',
      width: '100%',
      height: '400',
      backgroundColor: 'bisque',
      marginLeft: '0',
      marginRight: '0'
    };

    const carouselText = {
      marginLeft: '50',
      marginTop: '10'
    };

    return (
      <div style={carouselMain}>
        <div style={carouselText}>
          You may also like
          <CarouselList />
        </div>
      </div>
    );
  }
}

export default Carousel;