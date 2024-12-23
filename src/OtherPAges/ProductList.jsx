import React from 'react';
import './ProductList.css'; // স্টাইলিং ফাইল

// প্রডাক্ট ডাটা
const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150', // প্রডাক্ট ইমেজ URL
    title: '67 Pack Crochet Hooks Set',
    description: '13 PCS 2mm(B)-10mm(N) Ergonomic Soft Grip Crochet Handles Yarn Knitting Needles',
    price: '$13.99',
    rating: '4.5',
    reviews: '1,994',
    delivery: 'Thu, Jan 2',
    shipping: 'Ships to Bangladesh',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    title: 'J MARK Crochet Kit for Beginners',
    description: 'Complete Crocheting Set with Acrylic Yarn and Accessories',
    price: '$19.99',
    rating: '4.7',
    reviews: '2,810',
    delivery: 'Thu, Jan 2',
    shipping: 'Ships to Bangladesh',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    title: 'MYBAGZING Expandable Crochet Bag',
    description: 'Knitting Bag Yarn Storage Organizer - Yarn Bag and Crochet Tote',
    price: '$32.99',
    rating: '4.6',
    reviews: '600',
    delivery: 'Thu, Jan 2',
    shipping: 'Ships to Bangladesh',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    title: 'Leudes Knitting Bag Backpack',
    description: 'Yarn Storage Organizer Large Crochet Bag Tote',
    price: '$33.99',
    rating: '4.8',
    reviews: '1,716',
    delivery: 'Thu, Jan 2',
    shipping: 'Ships to Bangladesh',
  },
];

// প্রডাক্ট কার্ড কম্পোনেন্ট
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price}</p>
      <p className="product-rating">Rating: {product.rating} ★ ({product.reviews} reviews)</p>
      <p className="product-delivery">Delivery: {product.delivery}</p>
      <p className="product-shipping">{product.shipping}</p>
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
}

// প্রডাক্ট লিস্ট কম্পোনেন্ট
function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

