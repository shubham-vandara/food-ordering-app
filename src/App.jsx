import { BrowserRouter, Route, Routes } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import Menu from "./components/Menu";
import ItemSelection from "./components/ItemSelection";
import PlaceOrder from "./components/PlaceOrder";
import OrderTracking from "./components/OrderTracking";

function App() {
  return (
    <div className="p-4 flex justify-center min-h-screen">
      <div className="w-[500px] bg-amber-100 p-4 border-none rounded-md flex flex-col items-center">
        <h1 className="text-3xl font-bold">Food Ordering App</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/menu/:restaurantName" element={<Menu />} />
            <Route
              path="/item-selection/:itemName"
              element={<ItemSelection />}
            />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
