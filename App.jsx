import ReactDOM from "react-dom/client";

import CompanyLogo from "./public/img/download.png";

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
function RestaurantCard() {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_250,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/6/dab55604-2e16-46ad-8282-445331b01a0e_6494a846-89f4-48f4-bbfd-9550e5067db7_compressed"
        alt="Merghana Foods"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asia</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={CompanyLogo} className="logo" alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
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
