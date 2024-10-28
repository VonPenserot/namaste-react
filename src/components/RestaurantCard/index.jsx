export function RestaurantCard({
  restaurantName,
  restaurantCuisine,
  restaurantStars,
  restaurantDeliveryTime,
}) {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_250,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/6/dab55604-2e16-46ad-8282-445331b01a0e_6494a846-89f4-48f4-bbfd-9550e5067db7_compressed"
        alt="Merghana Foods"
      />
      <h3>{restaurantName}</h3>
      <h4>{restaurantCuisine}</h4>
      <h4>{restaurantStars} stars</h4>
      <h4>{restaurantDeliveryTime} minutes</h4>
    </div>
  );
}
