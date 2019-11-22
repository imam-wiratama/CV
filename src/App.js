import React, { Component } from 'react';
// import QueueAnim from 'rc-queue-anim';

import './App.css';

export default class App extends Component{
  constructor(props){
    super(props);
    this.init();
  }

  init() {
    this.state = {
      offsetX: '',
      offsetY: '',
      friction: 1 / 32
    }
    this._mouseMove = this._mouseMove.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousemove', this._mouseMove);
  }
  componentWillUnmount() {
    document.removeEventListener('mousemove', this._mouseMove);
  }
  _mouseMove(e) {
    let followX = (window.innerWidth / 2 - e.clientX);
    let followY = (window.innerHeight / 2 - e.clientY);

    let x = 0,
        y = 0;
    x +=( (-followX - x) * this.state.friction);
    y += (followY - y) * this.state.friction;
    this.setState({
      offsetX: x,
      offsetY: y
    });
  }
 

  

  render(){
       let offset = {
      transform: `translate(-50%, -50%) perspective(600px)
                  rotateY(${this.state.offsetX}deg)
                  rotateX(${this.state.offsetY}deg)`
                 }
    return(
      <>

    {/* <QueueAnim> */}
    <div key="1"><div class="area" >
            <ul class="circles">
                    <li>
                      <div className='wrapper' style={offset}></div>
                    </li>
                    <li>
                      <div className='wrapper' style={offset}></div>
                    </li>
                    <li><div className='wrapper' style={offset}>
        </div></li>
                    <li><div className='wrapper' style={offset}>
        </div></li>
                    <li><div className='wrapper' style={offset}>
        </div></li>
                    <li><div className='wrapper' style={offset}>
        </div></li>
                    <li><div className='wrapper' style={offset}>
        </div></li>
                    <li><div className='wrapper' style={offset}>
        </div></li>
                    <li><div className='wrapper' style={offset}>
        </div></li>
                    <li><div className='wrapper' style={offset}>
        </div></li>
            </ul>
    </div ></div>
    {/* <div key="2">Container 2</div>
    <div key="3">COntainer 3</div> */}
           <div key="2" class="context">
            <h1>Imam Wiratama</h1>
    </div>
  {/* </QueueAnim> */}

      </>
    )
  }
}

