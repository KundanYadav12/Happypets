import React, { useState } from "react";
import "./Essentials.css";
import Footer from "../Footer/Footer";
import group1 from "./image/group1.png";
import image1 from "./image/image1.png";
import image2 from "./image/image2.png";
import image3 from "./image/image3.png";
import image4 from "./image/image4.png";
import image5 from "./image/image5.png";
import image6 from "./image/image6.png";
import image7 from "./image/image7.png";
import image8 from "./image/image8.png";
import image9 from "./image/image9.png";
import dog1 from "./image/dog1.png";
import dog2 from "./image/dog2.png";
import dog3 from "./image/dog3.png";
import dog4 from "./image/dog4.png";
import dog5 from "./image/dog5.png";
import dog6 from "./image/dog6.png";
import dog7 from "./image/dog7.png";
import dog8 from "./image/dog8.png";
import dog9 from "./image/dog9.png";
import dog10 from "./image/dog10.png";
import group2 from "./image/group2.png";
import arrow from "./image/arrow.png";
import background1 from './image/background1.png';

const products = [
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
];

const dogs = [
  { img: dog1, categories: "food" },
  { img: dog2, categories: "Clothing" },
  { img: dog3, categories: "collars and harness" },
  { img: dog4, categories: "Accessories" },
  { img: dog5, categories: "Grooming" },
  { img: dog6, categories: "Food" },
  { img: dog7, categories: "Food" },
  { img: dog8, categories: "Food" },
  { img: dog9, categories: "Food" },
  { img: dog10, categories: "Food" },

];

const pets = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
  { img: image5 },
  { img: image6 },
  { img: image7 },
  { img: image8 },
];

function Essentials() {
  const [petsIndex, setPetsIndex] = useState(0);
  const [dogsIndex, setDogsIndex] = useState(0);
  const [productsIndex, setProductsIndex] = useState(0);

  const handleLeftClick = (setIndex, index, length) => {
    setIndex(index === 0 ? length - 1 : index - 1);
  };

  const handleRightClick = (setIndex, index, length) => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };

  return (
    <div className="essentials">
      <div className="header">
        <h1>T r e a t s a n d T o o l s f o r H a p p y P e t s </h1>
        <div className="header-content">
          <p>
            Browse our range of treats and tools that bring joy and health to
            your pets. From tasty snacks to essential gear, we have everything
            to keep your furry friends thriving.
          </p>
          <img src={group1} alt="group" />
        </div>
      </div>

      <div className="pets-page">
        <h2>Shop for your pet</h2>
        <div className="pets-container">
          <button onClick={() => handleLeftClick(setPetsIndex, petsIndex, pets.length)}>
            <img src={arrow} alt="arrow" />
          </button>
          <div className="items-wrapper first">
            {pets.slice(petsIndex, petsIndex + 5).map((pet, index) => (
              <div key={index} className="pet-card">
                <img src={pet.img} alt={pet.name} className="pet-img" />
              </div>
            ))}
          </div>
          <button onClick={() => handleRightClick(setPetsIndex, petsIndex, pets.length)}>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>

      <div className="animals-page">
        <h2>Shop by categories</h2>
        <div className="dog-container">
          <button onClick={() => handleLeftClick(setDogsIndex, dogsIndex, dogs.length)}>
            <img src={arrow} alt="arrow" />
          </button>
          <div className="items-wrapper ">
            {dogs.slice(dogsIndex, dogsIndex + 5).map((dog, index) => (
              <div key={index} className="review-card">
                <img src={dog.img} alt={dog.categories} className="dog-img" />
                <div className="dog-content">
                  <h3>{dog.categories}</h3>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => handleRightClick(setDogsIndex, dogsIndex, dogs.length)}>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <h3>Our Top Selling Products</h3>
      </div>

      <div className="products-container bottom">
        <button onClick={() => handleLeftClick(setProductsIndex, productsIndex, products.length)}>
          <img src={arrow} alt="arrow" />
        </button>

        <div className="items-wrapper ">
          {products.slice(productsIndex, productsIndex + 5).map((product, index) => (
            <div key={index} className="review-card">
              <img src={product.img} alt={product.name} className="product-img" />
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.review}</p>
              </div>
              </div>
            ))}
          </div>
        <button onClick={() => handleRightClick(setProductsIndex, productsIndex, products.length)}>
          <img src={arrow} alt="arrow" />
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Essentials;











 