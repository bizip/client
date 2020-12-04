import React from 'react';
// import InputTodo from './components/AddTodo';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import './styles/main.css';
function App() {
  return (
    <div>
    <Navigation />
    <Landing />
    <Destinations />
    <Footer />
    </div>
  );
}

export default App;
