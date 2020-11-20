import React from 'react';
import './App.css';


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
        >All Clear</button>
      </div>
    )
  }
}

// Demo App
class ImageCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.n = 5;
    this.lImages = this.randomizedOrder(this); //Array of image numbers
    this.state = {
      email: 'jonathan@wilding.com',
      responses: [],
      began_at: new Date(),
    }
  }
  
  randomizedOrder(e) {
    let arr = [];
    while(arr.length < e.n) {
      let r = Math.floor(Math.random() * e.n) + 1;
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
    this.forceUpdate()
    console.log('Button was pressed, it is ' + status + '. '+ this.getResults())
  }

  getResults(){
    return JSON.stringify(this.state.responses);
  }

//   var myData = {
//     hello: 1
// };

//   fetch("/api/v1/endpoint/5/", {
//       method: "put",
//       credentials: "same-origin",
//       headers: {
//           "X-CSRFToken": getCookie("csrftoken"),
//           "Accept": "application/json", 
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(myData)
//   }).then(function(response) {
//       return response.json();
//   }).then(function(data) {
//       console.log("Data is ok", data);
//   }).catch(function(ex) {
//       console.log("parsing failed", ex);
//   });

  postData() {
    fetch('http://localhost:8000/api/', {
        method: 'POST',
        credentials: "same-origin",
      headers: {
          // "X-CSRFToken": getCookie("csrftoken"),
          "Accept": "application/json", 
          "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
        console.log("Data is ok", data);
    }).catch(function(ex) {
        console.log("parsing failed", ex);
    });
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify(this.state),
  //   })
  //   .then(response => response.json())
  //   .catch(function() {
  //     console.log("error");
  // });
  }

  render() {
    if (this.lImages.length === 0) {
      this.postData();
      return (
        <p>All Done</p>
      );
    }

    return (
      <div className="container">
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
                      <h4>Task Description</h4>
                  </div>
                  <div className="card-body">
                  <p>You are a security guard for the Transportation Security Administration. <b>Your job is to scan the x-rays of passengers' bags for guns or knives.</b> If the bag contains a 
                      gun or a knife, click "Fail." All other bags will "Pass."</p>
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

