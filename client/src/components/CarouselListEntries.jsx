import React from 'react';
import Picture from './Picture.jsx'

class CarouselListEntries extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    let image = this.props.product;
    const textStyle = {
      marginLeft: '20px',
      marginRight: '20px',
    };

    return (
      <div>
        <Picture image={image} />
        <hr/>
        <div style={textStyle}>
          <p>Name Placeholder</p>
          <p>Price Placeholder</p>
          <p>Description Placeholder</p>
        </div>
      </div>
    );
  }
}

export default CarouselListEntries;
