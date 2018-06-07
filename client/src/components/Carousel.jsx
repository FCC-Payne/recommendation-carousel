import React from 'react';
import CarouselList from './CarouselList.jsx';
import axios from 'axios'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: null
    };
  }

  componentDidMount() {
    var newState = []
    axios.get('http://localhost:3004/product1')
      .then((response) => {
        newState = [
          response.data[0].product_id_1,
          response.data[0].product_id_2,
          response.data[0].product_id_3,
          response.data[0].product_id_4,
          response.data[0].product_id_5,
          response.data[0].product_id_6,
          response.data[0].product_id_7,
          response.data[0].product_id_8,
          response.data[0].product_id_9,
          response.data[0].product_id_10
        ];
        this.setState({ recommendations: newState });
      });
    }
    //use componentDidUpdate to check for asynchronous update?
    
    render() {
      const carouselMain = {
        position: 'fixed',
        // overflow: 'scroll',
        width: '100%',
        height: '30%',
        minHeight: '400px',
        maxHeight: '500px',
        marginLeft: '0px',
        marginRight: '0px',
        backgroundColor: 'bisque',
      };
      
      const carouselText = {
        marginLeft: '50px',
        marginTop: '10px'
      };
      
    return (
      <div style={carouselMain}>
        <div style={carouselText}>
          You may also like
        </div>
        {this.state.recommendations === null ? 
        <div>Loading</div> : <CarouselList recommendationData={this.state.recommendations}/>}
      </div>
    );
  }
}

export default Carousel;
