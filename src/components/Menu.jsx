import { Link, useParams } from "react-router-dom";

const menus = {
  "Feed Me!": [
    { id: 1, name: "Soup", price: 10 },
    { id: 2, name: "Steak", price: 15 },
    { id: 3, name: "Ice Cream", price: 20 },
    { id: 4, name: "Burger", price: 12 },
    { id: 5, name: "Pasta", price: 18 },
    { id: 6, name: "Salad", price: 8 },
    { id: 7, name: "Pizza", price: 22 },
    { id: 8, name: "Taco", price: 14 },
    { id: 9, name: "Sushi", price: 25 },
    { id: 10, name: "Sandwich", price: 9 },
  ],
  "Crave Cuisine": [
    { id: 1, name: "Chicken Wings", price: 15 },
    { id: 2, name: "Cheeseburger", price: 12 },
    { id: 3, name: "Fish Tacos", price: 18 },
    { id: 4, name: "Caesar Salad", price: 10 },
    { id: 5, name: "Margarita Pizza", price: 20 },
    { id: 6, name: "Ramen", price: 14 },
    { id: 7, name: "Fried Rice", price: 9 },
    { id: 8, name: "Grilled Cheese", price: 8 },
    { id: 9, name: "BBQ Ribs", price: 25 },
    { id: 10, name: "Chocolate Cake", price: 7 },
  ],
  "Tastebud Haven": [
    { id: 1, name: "Spaghetti Bolognese", price: 16 },
    { id: 2, name: "Lobster Roll", price: 28 },
    { id: 3, name: "Chicken Alfredo", price: 14 },
    { id: 4, name: "Greek Salad", price: 11 },
    { id: 5, name: "Beef Tacos", price: 13 },
    { id: 6, name: "Vegetable Stir Fry", price: 12 },
    { id: 7, name: "Clam Chowder", price: 10 },
    { id: 8, name: "French Fries", price: 6 },
    { id: 9, name: "Buffalo Wings", price: 15 },
    { id: 10, name: "Apple Pie", price: 8 },
  ],
  "Delicious Dreams Cafe": [
    { id: 1, name: "Pad Thai", price: 14 },
    { id: 2, name: "Chicken Parmesan", price: 17 },
    { id: 3, name: "Shrimp Scampi", price: 19 },
    { id: 4, name: "Eggplant Parmesan", price: 16 },
    { id: 5, name: "Beef Wellington", price: 30 },
    { id: 6, name: "Lasagna", price: 18 },
    { id: 7, name: "Miso Soup", price: 7 },
    { id: 8, name: "Falafel Wrap", price: 12 },
    { id: 9, name: "Crab Cakes", price: 22 },
    { id: 10, name: "Key Lime Pie", price: 9 },
  ],
  "Finest Food & Drinks": [
    { id: 1, name: "Baked Ziti", price: 13 },
    { id: 2, name: "Pho", price: 15 },
    { id: 3, name: "Chicken Caesar Wrap", price: 12 },
    { id: 4, name: "Bruschetta", price: 8 },
    { id: 5, name: "Pulled Pork Sandwich", price: 14 },
    { id: 6, name: "Vegetable Curry", price: 11 },
    { id: 7, name: "Stuffed Peppers", price: 13 },
    { id: 8, name: "Garlic Bread", price: 6 },
    { id: 9, name: "Chicken Tenders", price: 10 },
    { id: 10, name: "Chocolate", price: 7 },
  ],
};

function Menu() {
  const { restaurantName } = useParams();
  const menuItems = menus[restaurantName];

  return (
    <div className="p-4">
      <h2 className="text-2xl my-4">Menu of {restaurantName}</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="mb-2 text-lg">
            {item.id}. {item.name} - ${item.price}
            <Link
              to={`/item-selection/${item.name}`}
              className="ml-4 text-blue-500"
            >
              Select
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
