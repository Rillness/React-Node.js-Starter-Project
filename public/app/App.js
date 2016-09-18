var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({

  render : function(){
      return(
        <div> HELLO REACT </div>
      )

  }


});

  ReactDOM.render(<App />, document.getElementById('test'));
// ReactDOM.render(<App />, document.body);

// import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
//
// class App extends Component {
//
//     render(){
//
//       return(
//         <div>
//           This is a react fucking component...
//         </div>
//       )
//
//     }
//
// }
// ReactDOM.render(<App />, document.getElementById('test'));
