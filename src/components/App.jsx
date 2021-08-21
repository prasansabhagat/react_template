import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends Component {
  render() {
    return (
      <div>
        <h2></h2>
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;