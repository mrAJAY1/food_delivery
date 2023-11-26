import { fireEvent, render } from "@testing-library/react";
import Header from "../../components/Header";
import appStore from "../../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

it("Should load component with a login button", () => {
  const { getByRole, getByText } = render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  // one way to find login button
  //   const loginButton = getByRole("button");

  // another way
  //   const loginButton = getByText("Login");

  // more descriptive way
  const loginButton = getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should load component with cart items 0", () => {
  const { getAllByRole } = render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cartItems = getAllByRole("listitem").filter((value) => {
    return value.innerHTML.match(/Cart<sup>0<\/sup>/);
  });

  expect(cartItems.length).toBe(1);
});

it("Should change to Login on click", () => {
  const { getByRole, getByText } = render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
