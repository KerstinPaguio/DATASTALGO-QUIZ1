import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Product from "../components/Product";

const products = [
  {
    _id: "1",
    category: "Tops",
    name: "T-Shirt",
    image: "/images/Tshirt.jpg",
    price: 15.99,
    rating: 4.3,
    numReviews: 12,
  },
  {
    _id: "2",
    category: "Tops",
    name: "Jacket",
    image: "/images/Jacket.jpg",
    price: 35.99,
    rating: 4.7,
    numReviews: 18,
  },
  {
    _id: "3",
    category: "Bottoms",
    name: "Jeans",
    image: "/images/Jeans.jpg",
    price: 50.99,
    rating: 4.5,
    numReviews: 22,
  },
  {
    _id: "4",
    category: "Kids",
    name: "KidsDress",
    image: "/images/KidsDress.jpg",
    price: 55.99,
    rating: 4.8,
    numReviews: 16,
  },
  {
    _id: "5",
    category: "Dress",
    name: "Dresses",
    image: "/images/Dresses.jpg",
    price: 59.99,
    rating: 4.6,
    numReviews: 20,
  },
  {
    _id: "6",
    category: "Bottoms",
    name: "Shorts",
    image: "/images/Shorts.jpg",
    price: 29.99,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id: "7",
    category: "Bottoms",
    name: "Skorts",
    image: "/images/Skorts.jpg",
    price: 26.99,
    rating: 4.4,
    numReviews: 13,
  },
  {
    _id: "8",
    category: "Tops",
    name: "Polo Shirt",
    image: "/images/PoloShirt.jpg",
    price: 26.99,
    rating: 4.1,
    numReviews: 9,
  },

];

const categories = ["Tops", "Bottoms", "Dress", "Kids"];

function ClothesScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Clothes</h1>
      <p>Browse our latest collection of clothing items.</p>

      {/* ------------------------- */}
      {/* CATEGORY SELECTION CARDS */}
      {/* ------------------------- */}
      <h3 className="mt-4 mb-3">Categories</h3>
      <Row className="mb-4">
        {["All", ...categories].map((cat) => (
          <Col key={cat} sm={6} md={3}>
            <Card
              onClick={() => setSelectedCategory(cat)}
              className="text-center p-3 shadow-sm"
              style={{
                cursor: "pointer",
                backgroundColor:
                  selectedCategory === cat ? "#FFD8E4" : "#FFF",
                borderRadius: "12px",
                fontWeight: "600",
              }}
            >
              <Card.Body>{cat}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* ------------------------- */}
      {/* PRODUCT GRID DISPLAY     */}
      {/* ------------------------- */}
      <Row>
        {filteredProducts.length === 0 ? (
          <p>No products in this category.</p>
        ) : (
          filteredProducts.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}

export default ClothesScreen;

