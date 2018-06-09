import React from 'react';
import CarouselList from './CarouselList.jsx';
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null,
      recommendations: null
    };
  }

  componentDidMount() {
    var currentProduct = 1
    var newState = [];
    axios.get(`/product/id/${currentProduct}`)
    .then((response) => {
      for (let i = 1; i <= 10; i++){
        newState.push(response.data[0]['product_id_' + i])
      }
      this.setState({ 
        currentProduct: response.data[0].product_id,
        recommendations: newState 
      });
    });
  }

  //For future reference: use componentDidUpdate for cleaner async update?

  render() {
    const carouselMain = {
      position: 'fixed',
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
