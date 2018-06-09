import React from 'react';
import CarouselList from './CarouselList.jsx';
import axios from 'axios'

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
    var newState = []
    axios.get(`/product/id/${currentProduct}`)
    .then((response) => {
      for (let i = 1; i <= 10; i++){
        newState.push(response.data[0]['product_id_' + i])
      }
      //console.log('the state using iteration: ', newState)
      this.setState({ 
        currentProduct: response.data[0].product_id,
        recommendations: newState 
      });
      //console.log('this is current check: ',this.state)
    });
  }

  //Saving below for future reference***
  //use componentDidUpdate to check for asynchronous update?
  // componentDidUpdate(prevProps, prevState) {
  //   if(this.state.currentProduct !== prevState.currentProduct) {
  //     console.log('componentDidUpdate works and the current state is: ', this.state)
  //   }
  // }

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
