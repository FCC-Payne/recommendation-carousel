import React from 'react';
import Picture from './Picture.jsx';
import Heart from './Heart.jsx';
import axios from 'axios';
//possible improvement over original website: consistent vertical position of price (if product name is long and uses up second line, price is shown on lower line as well, causing inconsistent price information position)
class CarouselListEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      product: null,
    };
  }

  componentDidMount() {
    var currentCarouselItem = this.props.product;
    var imageLinks = [];
    var productInfo = null;
    axios.get(`/image/product_id/${currentCarouselItem}`)
    .then((response)=>{
      response.data.forEach((elem)=>{
        imageLinks.push(elem.image_link)
      });
      productInfo= {
        product_id: response.data[0].product_id,
        product_name: response.data[0].product_name,
        product_description: response.data[0].product_description,
        product_rent_price: response.data[0].rent_price,
        product_retail_price: response.data[0].retail_price,
        product_my_heart: response.data[0].my_heart,
      };
      this.setState({
        images: imageLinks,
        product: productInfo,
      });
    });
  }

  render(props) {
    const textStyle = {
      marginLeft: '20px',
      marginRight: '20px',
      marginTop: '-220px',
    };
  
    return (
      <div id="listEntry">
        {this.state.images === null ?
        <p>LOADING</p>:
        <div>
        <Heart myHeart={this.state.product.product_my_heart} productId={this.state.product.product_id} productName={this.state.product.product_name}/>
        <Picture image={this.state.images} />
        </div>
        }
        <hr/>
        <div style={textStyle}>
          {this.state.product === null ?
          <p>LOADING</p>:
          <div>
            <p id="name">{this.state.product.product_name}</p>
            <p id="description">{this.state.product.product_description}</p>
            <div id="price">${this.state.product.product_rent_price}</div>
            <div id="separator">&nbsp;|&nbsp;</div>
            <div id="quietPrice">${this.state.product.product_retail_price}&nbsp;retail</div>
          </div>
          }
        </div>
      </div>
    );
  }
}

export default CarouselListEntries;
