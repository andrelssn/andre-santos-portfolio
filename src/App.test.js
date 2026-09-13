import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the updated portfolio", () => {
  render(<App />);

  expect(screen.getByText(/Hi, I'm André Santos/i)).toBeInTheDocument();
  expect(screen.getByText(/SimWorx Eng. P&D/i)).toBeInTheDocument();
  expect(screen.getByText(/Personal Portfolio/i)).toBeInTheDocument();
  expect(screen.getByText(/Book Gallery/i)).toBeInTheDocument();
  expect(screen.getByText(/Pet Gallery/i)).toBeInTheDocument();
});
