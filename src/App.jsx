import React from 'react';
import Header from './components/Header';
import Navigate from './components/Navigate';
import Main from './components/Main';
import Welcome from './components/Welcome';
import Image from './components/Image';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

