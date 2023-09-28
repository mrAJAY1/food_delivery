import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Error from "./src/components/Error";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantMenu";
import useOnlineStatus from "./src/utils/useOnlineStatus";

const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));

const App = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="app">
      <Header />
      {onlineStatus ? <Outlet /> : <h1>OOps you are offline</h1>}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
