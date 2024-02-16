import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import "../Style/Cart.css";

const Cart = () => {
  // Get the cart state from Redux store
  const cart = useSelector((state) => state.cart);

  // State for the selected shipment method and Help modal visibility
  const [shipmentMethod, setShipmentMethod] = useState("standard");
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Calculate total price of items in the cart
  const calculateTotal = () => {
    // Initialize total to 0, then accumulate the prices of each item in the cart
    let total = cart.reduce((total, item) => total + item.price, 0);
    
    // Add additional cost for express shipment
    if (shipmentMethod === "express") {
      total += 100;
    }

    // Format the total amount to two decimal places
    return total.toFixed(2);
  };

  // Handle shipment method change
  const handleShipmentChange = (method) => {
    // Update the shipment method in the state when the user selects a different option
    setShipmentMethod(method);
  };

  // Toggle Help modal visibility
  const toggleHelpModal = () => {
    // Invert the current visibility state of the Help modal
    setShowHelpModal(!showHelpModal);
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {/* Display cart items */}
      <ul>
        {cart.map((item) => (
          <li key={item.productId}>
            {item.title} - R{item.price}
          </li>
        ))}
      </ul>
      {/* Display total price of items in the cart */}
      <div className="total-box">Total: R{calculateTotal()}</div>
      <div className="shipment-options">
        <p>Please choose your shipment method:</p>
        {/* Standard shipment option */}
        <label>
          <input
            type="radio"
            value="standard"
            checked={shipmentMethod === "standard"}
            onChange={() => handleShipmentChange("standard")}
          />
          Standard (5-7 days)
        </label>
        <br />
        {/* Express shipment option */}
        <label>
          <input
            type="radio"
            value="express"
            checked={shipmentMethod === "express"}
            onChange={() => handleShipmentChange("express")}
          />
          Express (2-3 days) - Additional R100
        </label>
      </div>
      {/* Button to toggle the Help Modal */}
      <button className="btn btn-info mt-3" onClick={toggleHelpModal}>
        Help
      </button>

      {/* Help Modal */}
      <Modal show={showHelpModal} onHide={toggleHelpModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Information about shipping options */}
          <p>
            For shipping options:
            <br />
            Standard (5-7 working days) - No additional cost, pick up at your nearest store
            <br />
            Express (2-3 working days) - Additional R100, express shipping is to your door
            <br/>
            For any queries, please contact us at 0659189805
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* Button to close the Help Modal */}
          <Button variant="secondary" onClick={toggleHelpModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
