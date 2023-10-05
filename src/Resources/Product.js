import React from 'react';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({ img, Title, category, Price, real }) => {
  return (
    <div className="product">
      <img className="productimg" src={img} alt="" />
      <div className='productdescription'>
        <h3>{Title}</h3>
        <span className='productcategory'>{category}</span>
        <div className="Productrating">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star outlined">&#9734;</span>
        </div>
        <div className='productbag'><FontAwesomeIcon icon={faBagShopping} /></div>
        <span className='productrealprice'>{real}</span>
        <p className='productprice'>{Price}</p>
      </div>
    </div>
  );
};

export default Product;
