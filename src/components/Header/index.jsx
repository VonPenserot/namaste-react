export function Header() {
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
