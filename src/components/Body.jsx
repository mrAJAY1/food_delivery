import resList from "../utils/mockData";
import ResCard from "./ResCard";

const Body = () => {
  return (
    <div className="res-body">
      <div className="res-container">
        {resList.map(restaurant => {
          return <ResCard key={restaurant.data.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
