import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio hero", () => {
  render(<App />);

  expect(screen.getByText(/reliable software/i)).toBeInTheDocument();
  expect(screen.getByText(/SimWorx Eng. P&D/i)).toBeInTheDocument();
});
