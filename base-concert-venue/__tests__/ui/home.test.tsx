import Home from "@/pages/index";
import { render, screen } from "@testing-library/react";

test("page has correct heading and image", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", {
    name: "Welcome to Popular Concert Venue",
  });
  expect(heading).toBeInTheDocument();
  const image = screen.getByRole("img", "");
});
