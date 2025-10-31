import { render, screen } from "@testing-library/react";
import { Loading } from "./loading";

describe("Loading", () => {
  it("The Box container must be rendered correctly.", () => {
    const { container } = render(<Loading />);

    const box = container.querySelector("div");
    expect(box).toBeInTheDocument();
    expect(box).toHaveStyle("display: flex");
  });

  it("should render the CircularProgress of the Material UI", () => {
    render(<Loading />);

    const progress = screen.getByRole("progressbar");
    expect(progress).toBeInTheDocument();
  });

  it("must maintain the expected structure (Box → Circular Progress)", () => {
    const { container } = render(<Loading />);
    const box = container.firstChild as HTMLElement;
    const progress = screen.getByRole("progressbar");

    expect(box).toContainElement(progress);
  });
});
