import React from 'react';
import ReactDOM from 'react-dom';
import CarouselListEntries from './CarouselListEntries.jsx';

class CarouselList extends React.Component {
  constructor(props) {
    super(props);

  }

  render(props) {
    const productsStyle = {
      display: 'inline',
      overflow: 'scroll',
      height: '300 px',
      width: '200 px',
      backgroundColor: 'white'
    };

    return (
      <div style={productsStyle}> <img src={this.props.product} width='100'/>
        
      </div>
    );
  }
}

export default CarouselList;