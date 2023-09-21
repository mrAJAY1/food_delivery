import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=12.960059122809971&lng=77.57337538383284"
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const shimmer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
    count => <Shimmer key={count} />
  );

  return (
    <div className="res-body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            className="search-input"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filtered = restaurantList.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filtered);
              setFilteredRestaurant(filtered);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              res => res.info.avgRating >= 4
            );
            filteredList.sort((a, b) => b.info.avgRating - a.info.avgRating);
            setFilteredRestaurant(filteredList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.length === 0
          ? shimmer
          : filteredRestaurant.map(restaurant => {
              return (
                <Link
                  className="text-decoration-none"
                  key={restaurant.info.id}
                  to={`/restaurant/${restaurant.info.id}`}>
                  <ResCard resData={restaurant} />
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Body;
