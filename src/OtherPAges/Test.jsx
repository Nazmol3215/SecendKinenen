import React from "react";
import picture1 from "../Images/87.png";
import picture2 from "../Images/t9.png";
import picture3 from "../Images/t0.png";
import picture4 from "../Images/t1.png";
import picture5 from "../Images/t2.png";
import picture6 from "../Images/t7.png";










const products = [
  {
    id: 1,
    title: "ZITY 3 Pack Long Sleeve Polo Shirts for Men",
    price: "$39.99",
    image: picture1,
    rating: 4,
    discount: "Save 10%",
  },
  {
    id: 2,
    title: "T.Chilyn Long Sleeve Golf Shirts for Men",
    price: "$27.49",
    image: picture2 ,
    rating: 4,
  },
  {
    id: 3,
    title: "PEVOSU Mens Long Sleeve Polo Shirts",
    price: "$28.99",
    image: picture3,
    rating: 4.5,
  },
  {
    id: 4,
    title: "Men's Casual Polo Shirts Classic Button",
    price: "$26.99",
    image: picture4,
    rating: 5,
  },
  {
    id: 5,
    title: "Men's Collar Polo Shirt Dry Fit",
    price: "$32.95",
    image: picture5 ,
    rating: 4,
    discount: "Save 20%",
  },
  {
    id: 6,
    title: "Olidarua Mens Long Sleeve Polo Shirts",
    price: "$25.99",
    image: picture6,
    rating: 4,
    discount: "Save 5%",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 col-sm-6 col-lg-3 mb-4">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-success">{product.discount}</p>
          <p className="card-text">{product.price}</p>
          <p className="card-text">Rating: {product.rating}⭐</p>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Popular Products</h2>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
