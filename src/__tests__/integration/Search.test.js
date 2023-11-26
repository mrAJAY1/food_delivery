import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

import Body from "../../components/Body";
import MOCK_DATA from "../../mocks/resDataMock.json";

import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) });
});

it("Should render body component with search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });
  const searchButton = screen.getByRole("button", { name: "Search" });

  expect(searchButton).toBeInTheDocument();
});

it("Should search reslist for burger input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  //checking if there are 10 cards before searching
  expect(cardsBeforeSearch.length).toBe(10);

  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchButton);
  const cardsAfterSearch = screen.getAllByTestId("resCard");

  //checking if there is only one card after searching
  expect(cardsAfterSearch.length).toBe(1);
});

it("should filter top-rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  // check if there are 10 cards before filter
  expect(cardsBeforeFilter.length).toBe(10);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedButton);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  // checks if there are 8 lengths after filter
  expect(cardsAfterFilter.length).toBe(8);
});
