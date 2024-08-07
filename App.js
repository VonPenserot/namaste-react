import ReactDOM from "react-dom/client";

function App() {
  return <div>Hello World!</div>;
}

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<App />);
