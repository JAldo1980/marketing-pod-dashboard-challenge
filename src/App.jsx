import { useState } from "react";
import React from "react";
import Container from "./Container";
import Header from "./components/Header";
import Toggle from "./components/Toggle";
import Dashboard from "./Dashboard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Container>
      <Header />
      <Toggle />
      <Dashboard />
      <Footer />
    </Container>
  );
}

export default App;
