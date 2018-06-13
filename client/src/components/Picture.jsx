import React from 'react';
import CarouselListEntries from './CarouselListEntries.jsx';
//found interesting bug on Rent the Runway -- when image change fading image seems to be first one no matter what the previous image were. 
class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
    };
  }
  render(props) {
    let image = this.props.image;
    const productImage1 = {
      position: 'relative',
      background: 'url(https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350)', // changed from url(${image[0]}) to conserve GET request from S3
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '130px',
      height: '210px',
      backgroundSize: '100%',
      marginLeft: '20px',
      marginRight: '20px',
    };
    const productImage2 = {
      position: 'relative',
      top: '-210px',
      background: 'url(https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350)', // changed from url(${image[1]}) to conserve GET request from S3
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '130px',
      height: '210px',
      backgroundSize: '100%',
      marginLeft: '20px',
      marginRight: '20px',
    };
    const productImage3 = {
      position: 'relative',
      top: '-525px',
      background: 'url(https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350)', // changed from url(${image[2]}) to conserve GET request from S3
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '130px',
      height: '420px',
      backgroundSize: '100%',
      marginLeft: '20px',
      marginRight: '20px',
    };
    const productImage4 = {
      position: 'relative',
      top: '-945px',
      background: 'url(https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350)', // changed from url(${image[3]}) to conserve GET request from S3
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '130px',
      height: '420px',
      backgroundSize: '100%',
      marginLeft: '20px',
      marginRight: '20px',
    };
    return (
      <div>
        <div id="image1" style={productImage1} />
        <div id="image2" style={productImage2} />
        <div id="image3" style={productImage3} />
        <div id="image4" style={productImage4} />
      </div>
    );
  }
}

export default Picture;
