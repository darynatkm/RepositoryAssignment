import { useState, useEffect } from 'react';
import Context from './Context';
import ProductList from './components/ProductList';
import Header from './components/Header';

function App() {
  const baseUrl = 'http://localhost:3000/';
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const context = {
    products,
    cart
  };

  useEffect(() => {
    fetch(baseUrl + 'products')
      .then(res => res.json())
      .then(json => setProducts(json));

      fetch(baseUrl + 'cart')
      .then(res => res.json())
      .then(json => setCart(json));
  }, []);

  return (
    <Context.Provider value={ context }>
      <div className="container">
        <Header />
        <ProductList />
      </div>
    </Context.Provider>
  );
}

export default App;
