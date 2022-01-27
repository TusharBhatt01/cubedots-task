import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
export default class App extends React.Component {
  constructor(props) {
    super(props)


  }
  render() {
    return (
      <>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/building">Building</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/apartment">Apartment</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/location">Location</Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    )
  }
}