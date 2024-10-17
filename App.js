import ReactDOM from "react-dom/client";

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

function App() {
  return <div>Hello World!</div>;
}

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<App />);
