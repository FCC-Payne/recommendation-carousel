import React from 'react';
import CarouselListEntries from './CarouselListEntries.jsx';
import axios from 'axios'

class CarouselList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: []
    };
  }

  componentDidMount(props) {
    this.setState({recommendations: this.props.recommendationData});
  }

  render() {
    const mainListContainerStyle = {
      position: 'center',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      minWidth: '850px',
      minHeight: '200px',
      maxWidth: '850px',
      backgroundColor: 'white',
      justifyContent: 'left',
      marginLeft: '50px',
      marginRight: '50px',
    };

    var subcontainerStyle = {
      position: 'center',
      display: 'flex',
      flexDirection: 'row',
      minWidth: '850px',
      minHeight: '200px',
      maxWidth: '850px',
      backgroundColor: 'white',
      justifyContent: 'left',
      marginLeft: '0px',
      marginRight: '0px',
    };

    return (
      <div id="mainListContainer" style={mainListContainerStyle}>
        <div id="subContainer" style={subcontainerStyle}>
        {this.state.recommendations.map((elem, i)=>{
          return <div key={elem + i}><CarouselListEntries product={elem} /></div>
        })}
        </div>
      </div>
    );
  }
}

export default CarouselList;
