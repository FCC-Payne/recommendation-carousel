import React from 'react';
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
      height: '30%',
      minHeight: '300px',
      maxHeight: '400px',
      backgroundColor: 'bisque',
      marginLeft: '0px',
      marginRight: '0px',
    };

    const carouselText = {
      marginLeft: '30px',
      marginTop: '10px'
    };

    return (
      <div style={carouselMain}>
        <div style={carouselText}>
          You may also like
        </div>
        <CarouselList />
      </div>
    );
  }
}

export default Carousel;
