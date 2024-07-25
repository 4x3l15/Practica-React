import React, { useEffect,useState } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [products , setProducts] = useState([]);
  const [category , setCategory] = useState('SELECCIONE LA CATEGORIA');

useEffect (() =>{
  fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data => setProducts(data))
}, [category]);

  return (
    <div className="App">
      <Navbar setCategory = {setCategory}/>
      <Container products = {products} category = {category}/>
      <Footer category = {category}/>
    </div>
  );
}

export default App;
