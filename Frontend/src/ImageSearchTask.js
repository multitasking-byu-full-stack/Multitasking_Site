import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Redirect } from 'react-router-dom';
import './App.css';
import Countdown from './CountdownTimer.jsx';

class NextButtons extends React.Component {

  render() {
    return (
      <div className='btn-group'>
        <button
          className='btn btn-danger'
          onClick={() => this.props.onClick('susp')}
        >Contraband Present</button>
        <button
          className='btn btn-success'
          onClick={() => this.props.onClick('clear')}
        >No Contraband</button>
      </div>
    )
  }
}

class ImageCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.n = 5; // Total number of images to view
    this.i = 0;  // current image index
    this.domain = 50; // total number of images in the set
    this.lImages = this.randomizedOrder(this); //Array of image numbers
  }

  randomizedOrder(prop) {
    let arr = [];
    while (arr.length < prop.n) {
      let r = Math.floor(Math.random() * prop.domain) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  }

  handleClick(status) {
    const ans = (status === 'clear') ? 'clear' : 'susp';
    this.state.responses.push({
      imgNumber: this.lImages[0],
      answer: ans
    });
    this.lImages.shift()
    this.i += 1;
    this.forceUpdate()
    console.log('Button was pressed, it is ' + status + '. ' + this.getResults())
  }

  getResults() {
    return JSON.stringify(this.state.responses);
  }

 

render() {
  if (this.lImages.length === 0) {
    this.postData();
    return (
      <Redirect to='/thank-you' />
    );
  }
  const currentDate = new Date();
  const in5minutes = new Date(currentDate.getTime() + 5 * 60000);
  return (
    <div className="container">
      <ProgressBar animated variant="success" now={this.i / this.n * 100} />
      <br>
      </br>
      <div className="row">

        <div className="col-md-8">
          <div className="card text-center">
            <div className='card-header'>Embeded React App</div>
            <div className='img-container'>
              <img className='card-img-top' src={`./images/TSA_bw/File ${this.lImages[0]}.jpg`} alt="Maybe Suspicious" />
            </div>
            <div className='card-footer text-right'>
              <NextButtons onClick={status => this.handleClick(status)} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h4 style={{ textAlign: 'center' }}><Countdown date={in5minutes} /></h4>
              {/* Task Description</h4> */}
            </div>
            <div className="card-body">
              <p>You are a security guard for the Transportation Security Administration. <b>Your job is to scan the x-rays of passengers' bags for guns or knives.</b> If the bag contains a
                      gun or a knife, click "Contraband Present." All other bags will "No Contraband."</p>
              <p><b>Most bags will not have suspicious items in them.</b> You will have ten seconds per image to select an option before it automatically advances. This demo contains five
                      example images. The real task will have many more and will require you to remain attentive for up to 10 minutes. Do your best!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default ImageCardComponent;

