import React from 'react';
import CarouselListEntries from './CarouselListEntries.jsx';
import styled from 'styled-components';
//found interesting bug on Rent the Runway -- when image change fading image seems to be first one no matter what the previous image were. 
import { ListEntry } from './CarouselListEntries.jsx'
//changed from url(${image[3]}) to conserve GET request from S3 https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
const StyledImage4 = styled.div`
  position: relative;
  top: 5px;
  background: url(${props => props.image}); 
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 130px;
  height: 420px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: -475px;
  &:hover {
    transition: opacity 0.5s ease-in-out;
    transition-delay: 0s;
    opacity: 0;
  }
`;
// changed from url(${image[2]}) to conserve GET request from S3
const StyledImage3 = styled.div`
  position: relative;
  top: -50px;
  background: url(${props => props.image}); 
  background-repeat: no-repeat;
  background-position: center;
  width: 130px;
  height: 420px;
  background-size: 100%;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: -475px;
  ${StyledImage4}:hover & {
    transition: opacity 0.5s ease-in-out;
    transition-delay: 1.5s;
    opacity: 0;
  }
`;
// changed from url(${image[1]}) to conserve GET request from S3
const StyledImage2 = styled.div`
  position: relative;
  top: -210px;
  background: url(${props => props.image}); 
  background-repeat: no-repeat;
  background-position: center;
  width: 130px;
  height: 210px;
  background-size: 100%;
  margin-left: 20px;
  margin-right: 20px;
  ${StyledImage4}:hover & {
    transition: opacity 0.5s ease-in-out;
    transition-delay: 3s;
    opacity: 0;
  }
`;
// changed from url(${image[0]}) to conserve GET request from S3
const StyledImage1 = styled.div`
  position: relative;
  background: url(${props => props.image}); 
  background-repeat: no-repeat;
  background-position: center;
  width: 130px;
  height: 210px;
  backgroundSize: 100%;
  margin-left: 20px;
  margin-right: 20px;
  background-size: contain;
  margin-top: 0px;
}`;

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
    };
  }
  render(props) {
    let image = this.props.image;
    // const productImage1 = {
    //   position: 'relative',
    //   background: `url(${image[0]})`, // changed from url(${image[0]}) to conserve GET request from S3
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    //   width: '130px',
    //   height: '210px',
    //   backgroundSize: '100%',
    //   marginLeft: '20px',
    //   marginRight: '20px',
    // };
    // const productImage2 = {
    //   position: 'relative',
    //   top: '-210px',
    //   background: `url(${image[1]})`, // changed from url(${image[1]}) to conserve GET request from S3
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    //   width: '130px',
    //   height: '210px',
    //   backgroundSize: '100%',
    //   marginLeft: '20px',
    //   marginRight: '20px',
    // };
    // const productImage3 = {
    //   position: 'relative',
    //   top: '-525px',
    //   background: `url(${image[2]})`, // changed from url(${image[2]}) to conserve GET request from S3
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    //   width: '130px',
    //   height: '420px',
    //   backgroundSize: '100%',
    //   marginLeft: '20px',
    //   marginRight: '20px',
    // };
    // const productImage4 = {
    //   position: 'relative',
    //   top: '-945px',
    //   background: `url(${image[3]})`, // changed from url(${image[3]}) to conserve GET request from S3
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    //   width: '130px',
    //   height: '420px',
    //   backgroundSize: '100%',
    //   marginLeft: '20px',
    //   marginRight: '20px',
    // };
    console.log(image)
    return (
      <div>
        <StyledImage1 className="carouselImage1" image={image[0]} />
        <StyledImage2 className="carouselImage2" image={image[1]} />
        <StyledImage3 className="carouselImage3" image={image[2]} />
        <StyledImage4 className="carouselImage4" image={image[3]} />
      </div>
    );
  }
}

export default Picture;
