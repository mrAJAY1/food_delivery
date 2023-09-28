import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

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
  };
  return restaurantList;
};
export default useRestaurantList;
