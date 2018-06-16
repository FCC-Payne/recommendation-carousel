import React from 'react';
import CarouselList from './CarouselList.jsx';
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null,
      recommendations: null,
    };
  }

  componentDidMount() {
    let currentProduct = window.location.pathname.substr(1);
    let newState = [];
    axios.get(`/product/id/${currentProduct}`)
      .then((response) => {
        for (let i = 1; i <= 10; i++) {
          newState.push(response.data[0]['product_id_' + i]);
        }
        this.setState({ 
          currentProduct: currentProduct,
          recommendations: newState,
        });
      }).catch((e) => {console.log('Logs problem: ', e); });
  }

  // For future reference: use componentDidUpdate for cleaner async update?

  render() {
    const carouselMain = {
      position: 'relative',
      width: '100%',
      height: '30%',
      minHeight: '400px',
      maxHeight: '500px',
      marginLeft: '0px',
      marginRight: '0px',
      backgroundColor: 'white',
    };
    
    const carouselText = {
      marginLeft: '50px',
      marginTop: '10px',
    };
      
    return (
      <div>
        <div className="carouselMain" style={carouselMain}>
          {this.state.recommendations === null ? 
          <div>Oops! We cannot find that product. Please verify your product id!</div> : <div>You may also like <CarouselList recommendationData={this.state.recommendations}/></div>
          }  
        </div>
      </div>
    );
  }
}

export default Carousel;
