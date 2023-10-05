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
  const formatter = new Intl.ListFormat("en", {
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
        <h4 className="text-xl font-semibold">{name}</h4>
        <h5 className="text-lg font-semibold text-green-700">
          {avgRating} star
        </h5>
        <div className="max-w-[230px]">
          <h6 className="overflow-hidden text-ellipsis whitespace-nowrap">
            {formatter.format(cuisines)}
          </h6>
        </div>
        <h6 className="overflow-hidden text-ellipsis whitespace-nowrap">
          {costForTwo}
        </h6>
        <h6 className="overflow-hidden text-ellipsis whitespace-nowrap">
          {deliveryTime} minutes
        </h6>
      </div>
    </div>
  );
};

export default ResCard;
