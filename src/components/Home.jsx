import React from 'react';
import candles from '../img/candles.jpg';

const Home = () => {
  return (
    <div>
    <div className="background-container" style={{backgroundImage:`url(${candles})`}}>
      <div className="display-1">MARCO</div>
    </div>
    <div className="container py-4">
      Content goes here, forms, tables, coulmns, rows and more...
    </div>
    </div>
  )
}

export default Home