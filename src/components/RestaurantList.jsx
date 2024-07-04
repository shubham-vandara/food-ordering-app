import { Link } from "react-router-dom";

const restaurants = [
  { id: 1, name: "Feed Me!" },
  { id: 2, name: "Crave Cuisine" },
  { id: 3, name: "Tastebud Haven" },
  { id: 4, name: "Delicious Dreams Cafe" },
  { id: 5, name: "Finest Food & Drinks" },
];

const RestaurantList = () => {
  return (
    <>
      <h2 className="text-2xl my-4">Available Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="mb-4 text-xl">
            <Link to={`/menu/${restaurant.name}`} className="text-blue-500">
              {restaurant.id} - {restaurant.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantList;
