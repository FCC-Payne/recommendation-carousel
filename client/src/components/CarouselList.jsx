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
      display: 'flex',
      flexDirection: 'row',
      align: 'right',
      // overflow: 'hidden',
      // width: '500',
      // height: '300',
      backgroundColor: 'white',
      marginLeft: '0',
      marginRight: '0'
    };

    const productsStyle = {
      display: 'inline',
      overflow: 'scroll',
      marginLeft: '10',
      marginRight: '10'
    };

    return (
      <div style={mainListContainerStyle} >
        {this.state.products.map((elem, i)=>{
          return <div key={elem + i} style={productsStyle}><CarouselListEntries product={elem} /></div>
        })}
      </div>
    );
  }
}

export default CarouselList;
