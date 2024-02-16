import React from "react";
import "../Style/TotalBox.css";

// TotalBox component to display the total amount
const TotalBox = ({ total }) => {
  // Format the total amount with 'R' currency symbol and two decimal places
  const formattedTotal = total ? `R${total.toFixed(2)}` : "N/A";

  return (
    <div className="total-box">
      {/* Display the formatted total amount */}
      <p>Total: {formattedTotal}</p>
    </div>
  );
};

export default TotalBox;
