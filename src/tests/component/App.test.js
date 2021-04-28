import { render, screen } from "@testing-library/react";
import App from "../../App";

test("Renders Create Account", () => {
  render(<App />);
  const response = screen.getByText(/Create Account/i);
  expect(response).toBeInTheDocument();
});
