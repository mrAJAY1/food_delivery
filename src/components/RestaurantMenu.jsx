import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoryItem from "./CategoryItem";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [openCategory, setOpenCategory] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      card =>
        card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="mt-10 mx-auto flex items-center flex-col w-6/12">
      <h1 className="text-3xl font-bold">{name}</h1>
      <sub className="text-sm">
        {cuisines} - {costForTwoMessage}
      </sub>
      <div className="mt-10 w-full">
        {categories?.map((category, index) => {
          return (
            <CategoryItem
              key={category?.card?.card.title}
              categoryData={category?.card}
              isOpen={openCategory === index}
              setIsOpen={() =>
                openCategory === index ? setOpenCategory(null) : setOpenCategory(index)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
