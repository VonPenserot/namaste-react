export function Body() {
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
