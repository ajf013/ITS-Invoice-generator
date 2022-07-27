import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <center><h3>INFANT TECHNOLOGY SOLUTIONS</h3></center>
        <InvoiceForm/>
        <Footer />
      </Container>

    </div>
  );
}}

export default App;
