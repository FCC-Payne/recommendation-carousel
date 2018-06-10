import React from 'react';
import CarouselListEntries from './CarouselListEntries.jsx';
import Scroll from './Scroll.jsx'
import axios from 'axios'

class CarouselList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: [],
      currentContainerMargin: '5px', 
      currentContainerPosition: 0,
    };
    this.handleClickNext = this.handleClickNext.bind(this)
    this.handleClickPrevious = this.handleClickPrevious.bind(this)
  }
  
  componentDidMount(props) {
    this.setState({recommendations: this.props.recommendationData});
  }
  
  handleClickNext() {
    console.log('next clicked')
    if (this.state.currentContainerPosition === 0) {
      for (let i = 0; i < 860; i += 10) {
        setTimeout(()=>{
          this.setState({
            recommendation: this.state.recommendation,
            currentContainerMargin: (0 - i) + 'px',
            currentContainerPosition: 1,
          }),
          1
        });
      }
    }
  }
  
  handleClickPrevious() {
    if (this.state.currentContainerPosition === 1){
      for(let i = 0; i < 850; i += 10){
        setTimeout(()=>{
          this.setState({
            recommendation: this.state.recommendation,
            currentContainerMargin: (-840 + i) + 'px',
            currentContainerPosition: 0
          }),
          1
        });
      }
    }
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
      marginLeft: this.state.currentContainerMargin,
      marginRight: '0px',
    };

    return (
      <div id="mainListContainer" style={mainListContainerStyle}>
        <Scroll clickNext={this.handleClickNext} clickPrevious={this.handleClickPrevious}/>
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
