import React, { useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import Reviews from "./components/Reviews";
import ImageGallery from "./components/ImageGallery";
import "./styles/main.scss";

const App = () => {
  const [productData, setProductData] = useState(null);
  const [cart, setCart] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/1"); // Example product ID
        const data = await response.json();
        setProductData({
          ...data,
          images: [
            { src: "image1.jpg", description: "Front view of the product" },
            { src: "image2.jpg", description: "Side view of the product" },
            { src: "image3.jpg", description: "Back view of the product" },
          ],
        });
        setReviews([
          { id: 1, author: "John Doe", content: "Great product!" },
          {
            id: 2,
            author: "Jane Smith",
            content: "Very satisfied with this purchase.",
          },
        ]);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleAddReview = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  if (!productData) return <div>Loading...</div>;

  return (
    <div className="app">
      <ImageGallery images={productData.images} />
      <ProductDetails
        productId={productData.id}
        onAddToCart={handleAddToCart}
      />
      <Reviews reviews={reviews} onAddReview={handleAddReview} />
      <div className="cart">
        <h2>Cart</h2>
        {cart.map((item, index) => (
          <div key={index}>
            <p>
              {item.title} - ${item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
