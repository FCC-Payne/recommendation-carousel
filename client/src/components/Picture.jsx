import React from 'react';
import styled from 'styled-components';
//found interesting bug on Rent the Runway -- when image change fading image seems to be first one no matter what the previous image were. 

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
  &:hover {
    transition: opacity 0.5s ease-in-out;
    transition-delay: 1.5s;
    opacity: 0;
  }
`;

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
  &:hover {
    transition: opacity 0.5s ease-in-out;
    transition-delay: 3s;
    opacity: 0;
  }
`;

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
