import { Link } from "react-router-dom";

function PlaceOrder() {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Place Your Order</h2>
      <p className="text-lg">Your order has been placed!</p>
      <Link to="/order-tracking" className="text-blue-500">
        Track Order
      </Link>
    </div>
  );
}

export default PlaceOrder;
