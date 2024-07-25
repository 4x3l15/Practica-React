import React from 'react';
import './Container.css';

const Container = ({ products ,category }) => {
     // Filtrar productos por la categoría seleccionada
  const filteredProducts = products.filter(product => product.category === category);
  return (
    <div className="container">
      <div className="content">
        <button onClick={() => alert('Haz clic en el botón')}>CONTADOR</button>

        <div className="cards">
        {filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} className="card-image" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
