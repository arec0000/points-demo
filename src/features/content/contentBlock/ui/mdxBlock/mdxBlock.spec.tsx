import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MdxBlock } from ".";

describe("MdxBlock", () => {
  it("should render h1 from mdx", async () => {
    render(<MdxBlock content="# Заголовок 1 уровня" />);
    const element = screen.getByRole("heading", { level: 1 });
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe("Заголовок 1 уровня");
  });

  it("should render h2 from mdx", async () => {
    render(<MdxBlock content="## Заголовок 2 уровня" />);
    const element = screen.getByRole("heading", { level: 2 });
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe("Заголовок 2 уровня");
  });

  it("should render h3 from mdx", async () => {
    render(<MdxBlock content="### Заголовок 3 уровня" />);
    const element = screen.getByRole("heading", { level: 3 });
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe("Заголовок 3 уровня");
  });

  it("should render h4 from mdx", async () => {
    render(<MdxBlock content="#### Заголовок 4 уровня" />);
    const element = screen.getByRole("heading", { level: 4 });
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe("Заголовок 4 уровня");
  });

  it("should render h5 from mdx", async () => {
    render(<MdxBlock content="##### Заголовок 5 уровня" />);
    const element = screen.getByRole("heading", { level: 5 });
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe("Заголовок 5 уровня");
  });

  it("should render h6 from mdx", async () => {
    render(<MdxBlock content="###### Заголовок 6 уровня" />);
    const element = screen.getByRole("heading", { level: 6 });
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe("Заголовок 6 уровня");
  });

  it("should render paragraphs from mdx", async () => {
    render(<MdxBlock content="**Параграф 1**\n\n**Параграф 2**" />);
    const paragraphs = screen.getAllByRole("paragraph");
    expect(paragraphs.length).toBe(2);
    expect(paragraphs[0]).toHaveTextContent("Параграф 1");
    expect(paragraphs[1]).toHaveTextContent("Параграф 2");
  });

  it("should render unordered lists from mdx", async () => {
    render(<MdxBlock content="- Список 1\n- Список 2" />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(2);
    expect(listItems[0]).toHaveTextContent("Список 1");
    expect(listItems[1]).toHaveTextContent("Список 2");
  });

  it("should render ordered lists from mdx", async () => {
    render(<MdxBlock content="1. Список 1\n2. Список 2" />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(2);
    expect(listItems[0]).toHaveTextContent("Список 1");
    expect(listItems[1]).toHaveTextContent("Список 2");
  });

  it("should render links from mdx", async () => {
    render(<MdxBlock content="[Ссылка на Google](https://www.google.com)" />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link.textContent).toBe("Ссылка на Google");
  });
});
