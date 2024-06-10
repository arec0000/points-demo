import { render, screen } from "@testing-library/react";
import { formFactory } from ".";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

jest.mock("react-hook-form", () => ({
  useForm: jest.fn(() => ({
    handleSubmit: jest.fn(),
    control: { register: jest.fn() },
    formState: { errors: {} },
  })),
}));

const mockField = {
  type: "text",
  name: "name",
  label: "Name",
};

const mockRenderComponent = jest.fn((props) => <input {...props.field} />);

const Form = formFactory({
  components: { text: mockRenderComponent },
  layout: (props) => <form onSubmit={props.handleSubmit}>{props.fields}</form>,
});

describe("Form", () => {
  it("should render a form with a text field", () => {
    render(
      <Form
        fields={[mockField]}
        resolver={zodResolver(z.object({ name: z.string() }))}
      />,
    );

    const input = screen.getByRole("textbox");
    const label = screen.getByText(mockField.label);

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(mockRenderComponent).toHaveBeenCalled();
  });
});
