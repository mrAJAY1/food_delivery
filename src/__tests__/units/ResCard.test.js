import { render, screen } from "@testing-library/react";

import ResCard, { withPromotedLabel } from "../../components/ResCard";
import MOCK_DATA from "../../mocks/resCardMock.json";
import PROMOTED_MOCK_DATA from "../../mocks/withPromotedMock.json";
import "@testing-library/jest-dom";

test("should render ResCard with props Data", () => {
  render(<ResCard resData={MOCK_DATA} />);
  const ResName = screen.getByText("Lavonne");

  expect(ResName).toBeInTheDocument();
});

test("Should render ResCard with promoted label", () => {
  const ResCardPromoted = withPromotedLabel(ResCard);
  render(<ResCardPromoted resData={PROMOTED_MOCK_DATA} />);

  const promotedHeader = screen.getByText("60% OFF");
  expect(promotedHeader).toBeInTheDocument();
});
