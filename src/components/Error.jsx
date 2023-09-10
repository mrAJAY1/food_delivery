import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPS !!</h1>
      <h2>An Error has occurred </h2>
      <h3>
        {err.status} {err.statusText}
      </h3>
      <h4>custom Error Page</h4>
    </div>
  );
};

export default Error;
