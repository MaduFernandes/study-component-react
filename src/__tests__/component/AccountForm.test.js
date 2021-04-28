import React from "react";

import { render, screen } from "@testing-library/react";
import AccountForm from "../../components/Form/AccountForm";

describe("AccountForm", () => {
  describe("Renders Placeholder", () => {
    it("Renders placeholder Password", () => {
      render(<AccountForm />);
      const input = screen.getByPlaceholderText("Password");
      expect(input).toBeInTheDocument();
    });

    it("Renders placeholder Email", () => {
      render(<AccountForm />);
      const input = screen.getByPlaceholderText("Email");
      expect(input).toBeInTheDocument();
    });
  });
});
