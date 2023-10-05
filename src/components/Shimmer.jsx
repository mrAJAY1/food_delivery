export default Shimmer = () => {
  return (
    <div className="w-72 animate-pulse">
      <div className="rounded-lg h-48 bg-gray-300"></div>
      <div className=" h-28 flex flex-col gap-2 mt-1">
        <div className=" h-6 bg-gray-300 rounded-lg"></div>
        <div className="h-6 bg-gray-300 rounded-lg"></div>
        <div className="h-6 bg-gray-300 rounded-lg"></div>
        <div className="h-6 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};
