import { useState, useEffect } from 'react';
import Context from './Context';

function App() {
  const context = {

  };


  return (
    <Context.Provider value={ context }>
      <div className="container">
      <h1>Routing</h1>
      </div>
    </Context.Provider>
  );
}

export default App;
