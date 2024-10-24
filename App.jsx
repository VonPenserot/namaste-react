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
  return <div className="res-card">Meghana Foods</div>;
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
      <div className="searh">Search</div>
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
