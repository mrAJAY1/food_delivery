import { useState } from "react";
import resList from "../utils/mockData";
import ResCard from "./ResCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="res-body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              res => res.data.avgRating >= 4
            );
            filteredList.sort((a, b) => b.data.avgRating - a.data.avgRating);
            setRestaurantList(filteredList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map(restaurant => {
          return <ResCard key={restaurant.data.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
