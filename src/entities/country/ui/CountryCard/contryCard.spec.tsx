import { render } from "@testing-library/react";
import { CountryCard } from ".";
import { screen } from "@testing-library/react";

describe("CountryCard", () => {
  it("should render thumbnail if provided", () => {
    const thumbnail = { src: "/path/to/image.jpg", alt: "Germany thumbnail" };
    render(
      <CountryCard title="Germany" slug="germany" thumbnail={thumbnail} />,
    );

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", thumbnail.src);
    expect(image).toHaveAttribute("alt", thumbnail.alt);
  });
});
