import React from 'react';
import Client from './components/Client';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Recomended from './components/Recomended';
import './styles/main.css';
function App() {
  return (
    <div>
    <Navigation />
    <Landing />
    <Destinations />
    <Recomended />
    <Footer />
    </div>
  );
}

export default App;
