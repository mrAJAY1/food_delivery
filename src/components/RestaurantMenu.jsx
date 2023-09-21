import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(useState(null));

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async id => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log({ jsonData: json.data });
    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // console.log(
  //   resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  // );
  const { itemCards } =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  // console.log({ itemCards });
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
