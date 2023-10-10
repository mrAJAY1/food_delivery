import React from "react";
import { CDN_URL } from "../utils/constants";

const CategoryListItem = ({ dishData }) => {
  return (
    <div className="mt-5 flex justify-between">
      <div className="mt-5 w-full flex justify-between items-center">
        <div className="w-9/12">
          <h5 className="text-md font-[500]">{dishData.name}</h5>
          <p className="mt-2">
            {dishData.category} <span>|</span>
            <span>{dishData.isVeg ? " 🔴" : " 🟢"}</span>
          </p>
          <p className="text-sm mt-3">{dishData.description}</p>
          <p className="mt-3 font-[500]">
            &#8377;{dishData.price / 100} |{" "}
            <span className="font-[400] text-sm">
              {dishData.inStock ? "In stock" : "out of stock"}
            </span>
          </p>
        </div>
        <div className="w-2/12">
          <img
            className="rounded-lg"
            loading="lazy"
            src={`${CDN_URL}${dishData.imageId}`}
            alt={dishData.name}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryListItem;
