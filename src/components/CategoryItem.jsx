import React from "react";
import CategoryListItem from "./CategoryListItem";

const CategoryItem = ({ categoryData, setIsOpen, isOpen }) => {
  const { itemCards, title } = categoryData.card;
  const handleClick = () => setIsOpen();
  return (
    <div
      onClick={handleClick}
      className="hover:cursor-pointer mb-5 p-5 shadow-md w-full border-slate-100 border-[1px]"
    >
      <div className="flex justify-between">
        <h4 className="text-lg font-[500]">
          {title}({itemCards.length})
        </h4>
        <span className="inline-block">
          {isOpen ? <>&#9650;</> : <>&#9660;</>}
        </span>
      </div>
      {isOpen && (
        <div className="mt-5 divide-y-2">
          {itemCards.map((dish) => (
            <CategoryListItem
              key={dish?.card?.info?.id}
              dishData={dish?.card?.info}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
