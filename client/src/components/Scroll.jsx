import React from 'react';

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div>
        <div className="next-arrow" onClick={this.props.clickNext}></div>
        <div className="previous-arrow" onClick={this.props.clickPrevious}></div>
      </div>
    );
  }
}

export default Scroll;
