import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function ItemSelection() {
  const { itemName } = useParams();
  const [quantity, setQuantity] = useState(1); // Initialize quantity state with 1

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value)); // Update quantity state based on user selection
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Selected Items</h2>
      <p className="mb-4 text-lg">
        Selected item is <strong className="text-xl">{itemName}</strong>
      </p>
      <div className="mb-4">
        <label htmlFor="quantity" className="mr-2 text-lg">
          Select Quantity:
        </label>
        <select
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="px-2 py-1  border rounded-md outline-none"
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>
      <Link to="/place-order" className="text-blue-500">
        Place Order
      </Link>
    </div>
  );
}

export default ItemSelection;
