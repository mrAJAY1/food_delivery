import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card">
      <div className="card-img-container">
        <img src={CDN_URL + cloudinaryImageId} alt="card img" />
        <div className="overlay"></div>
      </div>
      <div className="card-description">
        <h4>{name}</h4>
        <h5 className="avg-rating">{avgRating}</h5>
        <div className="cuisines">
          <h6>{cuisines.join(", ")}</h6>
        </div>{" "}
        <h6>₹{costForTwo / 100} FOR TWO</h6>
        <h6>{deliveryTime} minutes</h6>
      </div>
    </div>
  );
};

export default ResCard;
