import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;
  const formatter = new Intl.ListFormat("en-IN", {
    style: "long",
    type: "conjunction",
  });
  return (
    <div className="w-72 hover:scale-90 transition-transform">
      <div className="relative">
        <img
          className="rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="card img"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-5 rounded-lg"></div>
      </div>
      <div className="mt-1">
        <h4 className="text-base font-semibold">{name}</h4>
        <h5 className="text text-sm font-semibold text-green-700">
          {avgRating} star
        </h5>
        <div className="max-w-[100%]">
          <h6 className="overflow-hidden text-ellipsis whitespace-nowrap text-xs font-bold text-gray-600">
            {formatter.format(cuisines)}
          </h6>
        </div>
        <h6 className="overflow-hidden text-ellipsis whitespace-nowrap text-xs font-bold text-gray-600">
          {costForTwo}
        </h6>
        <h6 className="overflow-hidden text-ellipsis whitespace-nowrap text-xs font-bold text-gray-600">
          {deliveryTime} minutes
        </h6>
      </div>
    </div>
  );
};

export const withPromotedLabel = RestaurantCard => {
  return props => {
    return (
      <div className="relative">
        <label className="bg-black text-white rounded-lg px-4 absolute top-2 z-10 rounded-l-none">
          {props.resData.info.aggregatedDiscountInfoV3.header}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default ResCard;
