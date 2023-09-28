import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  return (
    <div>
      <h1>{name}</h1>
      <sub>
        {cuisines} - {costForTwoMessage}
      </sub>
      <ul>
        {itemCards?.map(card => {
          return (
            <li key={card.card.info.id}>
              {card.card.info.name} - {card.card.info.price / 100} -{" "}
              {card.card.info.ratings.aggregatedRating.rating}star
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
