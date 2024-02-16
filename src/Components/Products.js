import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Action";
import { Link } from "react-router-dom";

const Products = () => {
  // Redux dispatch hook for updating the store
  const dispatch = useDispatch();
  // State to manage the visibility of the help modal and the total price
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [total, setTotal] = useState(0);

  // Product data
  const products = [
    {
      id: 1,
      title: "Nike Air Max 90",
      description: "Classic style and all-day comfort",
      price: 2129.99,
      image: "/Images/NikeAirMax90.jpg",
    },
    {
      id: 2,
      title: "Nike React Element 55",
      description: "Modern design with React technology",
      price: 1109.99,
      image: "/Images/NikeReactelement55.jpg",
    },
    {
      id: 3,
      title: "Nike Air Force 1",
      description: "Iconic style and premium materials",
      price: 1389.99,
      image: "/Images/NikeAirforce1.jpg",
    },
    {
      id: 4,
      title: "Nike Free RN 5.0",
      description: "Lightweight and flexible for a natural feel",
      price: 879.99,
      image: "/Images/NikeFreeRN50.jpg",
    },
    {
      id: 5,
      title: "Nike Joyride Run Flyknit",
      description: "Cushioned comfort with innovative bead technology",
      price: 2149.99,
      image: "/Images/NikeJoyride.jpg",
    },
    {
      id: 6,
      title: "Nike Zoom Pegasus 37",
      description: "Responsive cushioning for a smooth ride",
      price: 2119.99,
      image: "/Images/NikeZoomPegasus.jpg",
    },
    {
      id: 7,
      title: "Nike Air Max 270",
      description: "Max Air unit for all-day comfort",
      price: 1149.99,
      image: "/Images/NikeAirMax270.jpg",
    },
    {
      id: 8,
      title: "Nike Blazer Mid '77",
      description: "Vintage-inspired design with modern comfort",
      price: 1999.99,
      image: "/Images/nike-blazer-mid-.webp",
    },
    {
      id: 9,
      title: "Nike Renew Run",
      description: "Soft and responsive cushioning for your run",
      price: 899.99,
      image: "/Images/NikeRenewRun.jpg",
    },
    {
      id: 10,
      title: "Nike Air Zoom Pegasus 38",
      description: "Smooth and responsive for everyday running",
      price: 1290.99,
      image: "/Images/NikeairZoomPegasus38.jpg",
    },
  ];
  // Handle buy button click
  const handleBuyClick = (productId, price) => {
    // Dispatch action to add product to the cart and update the total price
    dispatch(addToCart(productId, price));
    setTotal((prevTotal) => prevTotal + price);
  };

  return (
    <div className="container mt-4 position-relative">
      {/* Total box on the top right corner */}
      <div className="total-box">
        <p>Total: R{total.toFixed(2)}</p>
      </div>

      {/* Display products in a grid */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <Card className="h-100">
              {/* Display product image */}
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + product.image}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <Card.Body>
                {/* Display product details */}
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: R{product.price}</Card.Text>
                {/* Buy button to add product to the cart */}
                <Button
                  variant="primary"
                  className="mt-3"
                  onClick={() => handleBuyClick(product.id, product.price)}
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Link to navigate to the cart page */}
      <Link to="/cart" className="btn btn-primary mt-3">
        Go to Cart
      </Link>

      {/* Help Modal */}
      <Modal show={showHelpModal} onHide={() => setShowHelpModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Express shipment takes 2-3 days, and standard shipment takes 5-7 days.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHelpModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Products;


