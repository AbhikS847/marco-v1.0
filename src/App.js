import React from 'react';
import './App.css';
import Header from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
    <Router>
    <Header />
    <Routes>
    <Route path="/" exact element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path='*' element={<NotFound />}></Route>
    </Routes>
    <Footer />
    </Router>
    </div>
  )
}

export default App