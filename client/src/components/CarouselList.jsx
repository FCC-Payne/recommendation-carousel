import React from 'react';
import CarouselListEntries from './CarouselListEntries.jsx';

class CarouselList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/100-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/101-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/102-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/103-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/104-1.jpeg'
      ]
    };
  }

  componentDidMount() {

  }

  render() {
    const mainListContainerStyle = {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      minWidth: '800px',
      minHeight: '200px',
      backgroundColor: 'white',
      justifyContent: 'center',
    };

    return (
      <div style={mainListContainerStyle} >
        {this.state.products.map((elem, i)=>{
          return <div key={elem + i}><CarouselListEntries product={elem} /></div>
        })}
      </div>
    );
  }
}

export default CarouselList;
