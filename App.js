import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Error from "./src/components/Error";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import useOnlineStatus from "./src/utils/useOnlineStatus";
import { Provider } from "react-redux";
import store from "./src/store/store";

const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));
const RestaurantMenu = lazy(() => import("./src/components/RestaurantMenu"));

const App = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        {onlineStatus ? <Outlet /> : <h1>OOps you are offline</h1>}
      </div>
    </Provider>
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
        element: (
          <Suspense fallback={<div>Loading....</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:resId",
        element: (
          <Suspense fallback={<div>Loading....</div>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
