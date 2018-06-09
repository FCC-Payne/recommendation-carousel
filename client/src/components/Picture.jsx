import React from 'react';
import CarouselListEntries from './CarouselListEntries.jsx';
//found interesting bug on Rent the Runway -- when image change fading image seems to be first one no matter what the previous image were. 
class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity0: 0.5,
      opacity1: 1,
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver() {
    // for (let i = 10; i > 0; i--){
    //   if (this.state.opacity > 0){
    //     setTimeout(this.setState({opacity: this.state.opacity - 0.1}), 200)
    //   }
    // }
    this.setState({opacity0: 0.0, opacity1: 1})
  }
  

  render(props) {
    let image = this.props.image;
    const imgStyle = {
      position: 'relative',
      left: 0,
      background: `url(${image[0]}), url(${image[1]}), url(${image[2]}), url(${image[3]})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '130px',
      height: '210px',
      backgroundSize: '100%',
      marginLeft: '20px',
      marginRight: '20px',
      opacity: `${this.state.opacity0}, ${this.state.opacity1}, 1, 1`,
      transition: 'opacity 1s ease-in-out',
    };

    return (
      <div id="image" style={imgStyle} onMouseOver={this.handleMouseOver}></div>
    );
  }
}

export default Picture;
