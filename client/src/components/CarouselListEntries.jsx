import React from 'react';
import axios from 'axios';
import Picture from './Picture.jsx';
import Heart from './Heart.jsx';
import styled from 'styled-components';
import Image4 from './Picture.jsx';
// possible improvement over original website: consistent vertical position of price (if product name is long and uses up second line, price is shown on lower line as well, causing inconsistent price information position)

export const ListEntry = styled.div`
  position: relative;
  height: 330px;
  width: 100%;
  top: 12px;
`;

class CarouselListEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      product: null,
    };
  }
 

  componentDidMount() {
    let currentCarouselItem = this.props.product;
    const imageLinks = [];
    let productInfo = null;
    axios.get(`/${currentCarouselItem}/image/product_id`)
      .then((response)=>{
        response.data.forEach((elem)=>{
          imageLinks.push(elem.image_link)
        });
        productInfo = {
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
    const hr = {
      marginLeft: '10px',
      padding: '0px',
      border: '0',
      width: '90%',
      borderBottom: '1px solid lightgrey',
      marginTop: '-95px', // altered
    };

    const price = {
      fontSize: '12px',
      fontFamily: 'swansea',
      display: 'inline',
    };

    const separator = {
      color: 'grey',
      display: 'inline',
    };

    const name = {
      fontSize: '10px',
      fontFamily: 'EngraversGothicBT',
      textTransform: 'uppercase',
      marginTop: '230px',
    };

    const description = {
      fontSize: '12px',
      fontFamily: 'swansea',
    };

    const quietPrice = {
      borderRight: '1 lightgray',
      display: 'inline',
      color: 'lightgray',
      fontFamily: 'swansea',
      fontSize: '12px',
    };

    const details = {
      lineHeight: '9px',
    };

    return (
      <ListEntry className="listEntry">
        {this.state.images === null ?
          <p>LOADING</p> :
          <div>
            <Heart
              myHeart={this.state.product.product_my_heart} 
              productId={this.state.product.product_id} 
              productName={this.state.product.product_name}
            />
            <Picture image={this.state.images} />
          </div>
        }
        <hr style={hr} />
        <div style={textStyle}>
          {this.state.product === null ?
            <p>LOADING</p> :
            <div style={details}>
              <p id="name" style={name}>{this.state.product.product_name}</p>
              <p id="description" style={description}>{this.state.product.product_description}</p>
              <div id="price" style={price}>${this.state.product.product_rent_price}</div>
              <div id="separator" style={separator}>&nbsp;|&nbsp;</div>
              <div id="quietPrice" style={quietPrice}>${this.state.product.product_retail_price}&nbsp;retail</div>
            </div>
          }
        </div>
      </ListEntry>
    );
  }
}

export default CarouselListEntries;