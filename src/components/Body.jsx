import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResCard, { withPromotedLabel } from "./ResCard";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";

const ResCardPromoted = withPromotedLabel(ResCard);
const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const restaurantList = useRestaurantList();

  useEffect(() => {
    setFilteredRestaurant(restaurantList);
  }, [restaurantList]);


  const shimmer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
    count => <Shimmer key={count} />
  );

  return (
    <div className="mt-14 flex flex-col items-center w-full">
      <div className="flex justify-center gap-20 mx-auto">
        <div className="search flex gap-x-5">
          <input
            type="text"
            placeholder="search"
            className="border rounded-md h-10 w-[500px] px-2.5"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <button
            className="rounded-lg border px-4"
            onClick={() => {
              const filtered = restaurantList.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}>
            Search
          </button>
        </div>
        <button
          className="border rounded-lg px-5 bg-green-300"
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
      <div className="mt-16 grid gap-x-20 gap-y-10 grid-cols-4 w-fit">
        {restaurantList.length === 0
          ? shimmer
          : filteredRestaurant.map(restaurant => {
              return (
                <Link
                  key={restaurant.info.id}
                  to={`/restaurant/${restaurant.info.id}`}
                  state={{ avgRating: restaurant?.info?.avgRating }}>
                  {restaurant.info.aggregatedDiscountInfoV3?.header ? (
                    <ResCardPromoted resData={restaurant} />
                  ) : (
                    <ResCard resData={restaurant} />
                  )}
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Body;
