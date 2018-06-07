import React from 'react';
import CarouselListEntries from './CarouselListEntries.jsx';

class Picture extends React.Component {
  constructor(props) {
    super(props);

  }

  render(props) {
    let image = this.props.image;
    //console.log(image)
    const productsStyle = {
      //flexBasis: 'auto',
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // backgroundSize: '150px',
      width: '130px',
      height: '210px',
      backgroundSize: '100%',
      // minWidth:'50px',
      // minHeight:'220px',
      marginLeft: '20px',
      marginRight: '20px',
    };

    return (
      <div style={productsStyle}></div>
    );
  }
}

export default Picture;
