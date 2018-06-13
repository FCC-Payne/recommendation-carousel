import React from 'react';
import Carousel from './Carousel.jsx';
import{ injectGlobal } from 'styled-components';

injectGlobal`
@font-face{
  font - family: 'EngraversGothicBT';
  src: url('./Engravers\'\ Gothic\ BT.ttf')
}

@font-face{
  font - family: 'swansea';
  src: url('./SWANSE__.TTF');
}

html, body{
  margin: 0;
  padding: 0;
}

p{
  margin: 0;
}

hr{
  margin - left: 10px;
  padding: 0px;
  border: 0;
  width: 90 %;
  border - bottom: 1px solid lightgrey;
  margin - top: -1040px;
}

#price{
  font - size: 12px;
  font - family: 'swansea';
  display: inline;
}

#separator{
  color: grey;
  display: inline;
}

#name{
  font - size: 10px;
  font - family: 'EngraversGothicBT';
  text - transform: uppercase;
  margin - top: 230px;
}

#description{
  font - size: 12px;
  font - family: 'swansea';
}

#quietPrice{
  border - right: 1 lightgray;
  display: inline;
  color: lightgray;
  font - family: 'swansea';
  font - size: 12px;
}

#listEntry: hover #image0{

}

#listEntry: hover #image1{
  /* transition: opacity 0.5s ease-in-out;
  transition-delay: 4.5s;
  opacity: 0; */
}

#listEntry: hover #image2{
  transition: opacity 0.5s ease -in -out;
  transition - delay: 3s;
  opacity: 0;
}

#listEntry: hover #image3{
  transition: opacity 0.5s ease -in -out;
  transition - delay: 1.5s;
  opacity: 0;
}

#listEntry: hover #image4{
  transition: opacity 0.5s ease -in -out;
  transition - delay: 0s;
  opacity: 0;
}

.next - arrow{
  display: block;
  position: absolute;
  background - image: url("./sprites/001-next.svg");
  width: 64px;
  height: 64px;
  background - size: 100 %;
  left: 885px;
  top: 130px;
}

.next - arrow: hover{
  display: block;
  position: absolute;
  background - image: url("./sprites/001-next.svg");
  width: 64px;
  height: 64px;
  background - size: 100 %;
  left: 885px;
  top: 130px;
  opacity: 0.5;
}

.previous - arrow{
  display: block;
  position: absolute;
  background - image: url("./sprites/002-back.svg");
  width: 64px;
  height: 64px;
  background - size: 100 %;
  left: 0px;
  top: 130px;
}

.previous - arrow: hover{
  display: block;
  position: absolute;
  background - image: url("./sprites/002-back.svg");
  width: 64px;
  height: 64px;
  background - size: 100 %;
  left: 0px;
  top: 130px;
  opacity: 0.5;
}
`;

class App extends React.Component { //keeping stateful for future need
  constructor(props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <div>
        <Carousel />
      </div>
    );
  }
}

export default App;
