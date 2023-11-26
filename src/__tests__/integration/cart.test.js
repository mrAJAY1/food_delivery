import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import RestaurantMenu from "../../components/RestaurantMenu";

import MOCK_DATA from "../../mocks/resMenuMock.json";
import appstore from "../../store/store";
import Header from "../../components/Header";

import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) });
});

describe("RestaurantMenu test cases integrated with cart", () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appstore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>,
      );
    });
  });

  test("should render restaurant menu component", () => {
    const accordionHeader = screen.getByText("Dessert(4)");

    // checks if accordionHeader is rendered
    expect(accordionHeader).toBeInTheDocument();
  });

  test("should render restaurant menu component", () => {
    const accordionHeader = screen.getByText("Dessert(4)");
    fireEvent.click(accordionHeader);

    // check if there are 4 dessert items
    expect(screen.getAllByTestId("categoryListItem").length).toBe(4);
  });

  test("should add one item to the cart", () => {
    const accordionHeader = screen.getByText("Dessert(4)");
    fireEvent.click(accordionHeader);

    const addButtons = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addButtons[0]);

    // checks if cart in header is showing 1 item
    expect(
      screen.getAllByRole("listitem").filter((value) => {
        return value.innerHTML.match(/Cart<sup>1<\/sup>/);
      }).length,
    ).toBe(1);
  });

  test("should add 2 items to the cart", () => {
    // clicks accordion header
    fireEvent.click(screen.getByText("Dessert(4)"));

    const addButtons = screen.getAllByRole("button", { name: "Add +" });

    // clicks addButton second time
    fireEvent.click(addButtons[1]);

    // checks if cart in header is showing 1 item
    expect(
      screen.getAllByRole("listitem").filter((value) => {
        return value.innerHTML.match(/Cart<sup>2<\/sup>/);
      }).length,
    ).toBe(1);
  });
});
