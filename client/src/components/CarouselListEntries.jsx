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

    const pStyle = {
      marginTop: '0px',
      padding: '0px',
    };

    return (
      <div>
        <Picture image={image} />
        <div style={textStyle}>
          <p style={pStyle}>Name Placeholder</p>
          <p style={pStyle}>Price Placeholder</p>
          <p style={pStyle}>Description Placeholder</p>
        </div>
      </div>
    );
  }
}

export default CarouselListEntries;
