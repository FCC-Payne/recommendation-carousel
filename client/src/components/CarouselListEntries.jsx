import React from 'react';
import Picture from './Picture.jsx';
import axios from 'axios';

class CarouselListEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      product: null
    }
  }

  componentDidMount() {
    var currentCarouselItem = this.props.product;
    var imageLinks = []
    var productInfo = null
    axios.get(`/image/product_id/${currentCarouselItem}`)
    .then((response)=>{
      response.data.forEach((elem)=>{
        imageLinks.push(elem.image_link)
      })
      productInfo= {
        product_id: response.data[0].product_id,
        product_name: response.data[0].product_name,
        product_description: response.data[0].product_description,
        product_rent_price: response.data[0].rent_price,
        product_retail_price: response.data[0].retail_price,
        product_my_heart: response.data[0].my_heart, //this is inside join table -- should not modify this
      }
      this.setState({
        images: imageLinks,
        product: productInfo,
      })
      console.log('this is the the image', this.state.images)
    })
  }

  render(props) {
    //let image = this.props.product;
    const textStyle = {
      marginLeft: '20px',
      marginRight: '20px',
    };

    return (
      <div>
        {this.state.images === null ?
        <p>LOADING</p>:
        <Picture image={this.state.images} />
        }
        <hr/>
        <div style={textStyle}>
          {this.state.product === null ?
          <p>LOADING</p>:
          <div>
          <p id="name">{this.state.product.product_name}</p>
          <p id="description">{this.state.product.product_description}</p>
          <div id="price">{this.state.product.product_rent_price}</div>
          <div id="separator">&nbsp;|&nbsp;</div>
          <div id="quietPrice">{this.state.product.product_retail_price}&nbsp;retail</div>
          </div>
          }
        </div>
      </div>
    );
  }
}

export default CarouselListEntries;
