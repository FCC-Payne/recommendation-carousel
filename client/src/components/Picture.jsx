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
    var productImage1 = {
      position: 'relative',
      background: `url(${image[0]})`, //changed from url(${image[0]}) to conserve GET request from S3
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '130px',
      height: '210px',
      backgroundSize: '100%',
      marginLeft: '20px',
      marginRight: '20px'
    };
    
    var productImage2 = {
      position: 'relative',
      top: '-210px',
      background: `url(${image[1]})`,//changed from url(${image[1]}) to conserve GET request from S3
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '130px',
      height: '210px',
      backgroundSize: '100%',
      marginLeft: '20px',
      marginRight: '20px'
    };
    
    var productImage3 = {
      position: 'relative',
      top: '-525px',
      background: `url(${image[2]})`,//changed from url(${image[2]}) to conserve GET request from S3
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '130px',
      height: '420px',
      backgroundSize: '100%',
      marginLeft: '20px',
      marginRight: '20px'
    };
    
    var productImage4 = {
      position: 'relative',
      top: '-945px',
      background: `url(${image[3]})`,//changed from url(${image[3]}) to conserve GET request from S3
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '130px',
      height: '420px',
      backgroundSize: '100%',
      marginLeft: '20px',
      marginRight: '20px'
    };
    
    return (
      <div>
        <div id="image1" style={productImage1}></div>
        <div id='image2' style={productImage2}></div>
        <div id='image3' style={productImage3}></div>
        <div id='image4' style={productImage4}></div>
      </div>
    );
  }
}

export default Picture;
