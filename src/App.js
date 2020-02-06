import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Button from './Components/Button';
import Form from './Components/Form';
import Footer from './Components/Footer';
import Email from './Components/Email';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Button />
        <Form />
        <Email />
        <Footer />
      </div>
    )
  }
}

export default App;
