import React from 'react';
import axios from 'axios';

class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: this.props.myHeart,
      style: 'http://localhost:3004/sprites/002-unheart.svg'
    };
    this.handleClickHeart = this.handleClickHeart.bind(this)
  }

  componentDidMount(props) {
    if (this.props.myHeart === 1) {
      this.setState({
        heart: this.props.myHeart,
        style: 'http://localhost:3004/sprites/001-heart.svg'
      });
    } else {
      this.setState({
        heart: this.props.myHeart,
        style: 'http://localhost:3004/sprites/002-unheart.svg'
      });
    }
  }
  
  handleClickHeart(props) {
    console.log('clicked heart for ' + this.props.productId + ' and the heart in the db before the change was: ' + this.state.heart)
    if (this.state.heart === 1) {
      axios.post(`http://localhost:3004/remove_heart/${this.props.productId}`);
      this.setState({
        heart: 0,
        style: 'http://localhost:3004/sprites/002-unheart.svg',
      });
    } else {
      axios.post(`/add_heart/${this.props.productId}`);
      this.setState({
        heart: 1,
        style: 'http://localhost:3004/sprites/001-heart.svg',
      });
    }
  }

  render(props) {
    let currentStyle = {
      backgroundImage: `url(${this.state.style})`,
      position: 'relative',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      overflow: 'hidden',
      top: '0px',
      marginTop: '0px',
      marginLeft: '140px',
      width: '20px',
      height: '20px',
      zIndex: '999'
    };

    return (
      <div className="myHeart" style={currentStyle} onClick={this.handleClickHeart} />
    );
  }
}

export default Heart;
