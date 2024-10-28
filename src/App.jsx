import ReactDOM from "react-dom/client";

import { Header } from "./components/Header";
import { RestaurantCard } from "./components/RestaurantCard";

/**
 * Header
 *  - Logout Component
 *  - Nav Items
 * Body
 *  - Search Input
 *  - Restaurant Container
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          restaurantName="Meghana Foods"
          restaurantCuisine="Biryani, North Indian, Asia"
          restaurantStars={4.4}
          restaurantAvgPrepTime={38}
        />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}

function AppLayout() {
  return <div className="app">// Header // Body // Footer</div>;
}

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<App />);
