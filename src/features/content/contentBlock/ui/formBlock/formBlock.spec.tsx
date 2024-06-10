import { render, screen } from "@testing-library/react";
import { FormBlock } from ".";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import userEvent from "@testing-library/user-event";

describe("FormBlock", () => {
  it("should render a form with title and submit button", () => {
    const onSubmit = jest.fn();

    render(
      <FormBlock
        title="Test Form"
        fields={[]}
        buttonText="Submit"
        onSubmit={onSubmit}
        resolver={zodResolver(z.object({}))}
      />,
    );

    const form = screen.getByRole("form");
    const title = screen.getByText("Test Form");
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    expect(form).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("should call onSubmit handler when form is submitted", () => {
    const onSubmit = jest.fn();

    render(
      <FormBlock
        title="Test Form"
        fields={[]}
        buttonText="Submit"
        onSubmit={onSubmit}
        resolver={zodResolver(z.object({}))}
      />,
    );

    userEvent.keyboard("Enter");

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
