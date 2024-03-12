import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './index.css';

const productsApiUrl = 'https://fakestoreapi.com/products/';

const ProductDetails = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`${productsApiUrl}${id}`);
        const fetchedData = await response.json();
        const updatedData = {
          id: fetchedData.id,
          category: fetchedData.category,
          description: fetchedData.description,
          image: fetchedData.image,
          price: fetchedData.price,
          rate: fetchedData.rating.rate,
          count: fetchedData.rating.count,
          title: fetchedData.title,
        };
        setProductData(updatedData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    getProductDetails();
  }, [id]);

  const { image, description, price, rate, title } = productData;

  return (
    <div className="product-container">
      <img src={image} alt={title} className="image" />
      <h1 className="head">{title}</h1>
      <p className="descr">{description}</p>
      <p className="other-details">Price: ${price}</p>
      <p className="other-details">Rating: {rate}</p>
    </div>
  );
};

export default ProductDetails;
