import React from 'react';

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {

  const nextArrow = {
    display:'block',
    position: 'absolute',
    backgroundImage: 'url(http://localhost:3004/sprites/001-next.svg)',
    width: '64px',
    height: '64px',
    backgroundSize: '100%',
    left: '885px',
    top: '130px',
  }
  const previousArrow = {
    display:'block',
    position: 'absolute',
    backgroundImage: 'url(http://localhost:3004/sprites/002-back.svg)',
    width: '64px',
    height: '64px',
    backgroundSize: '100%',
    left: '0px',
    top: '130px',
  }

    return (
      <div>
        <div style={nextArrow} className="next-arrow" onClick={this.props.clickNext}></div>
        <div style={previousArrow} className="previous-arrow" onClick={this.props.clickPrevious}></div>
      </div>
    );
  }
}

export default Scroll;
