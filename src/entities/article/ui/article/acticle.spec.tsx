import { render, screen } from "@testing-library/react";
import { Article } from ".";

import classes from "@/shared/uikit/atoms/Tag/index.module.scss";

const mockArticleData = {
  title: "Test Article Title",
  author: "John Doe",
  publishDate: "2024-06-10",
  tags: ["Tech", "JavaScript"],
};

describe("Article", () => {
  it("should render article title, author, publish date, and meta information", () => {
    render(<Article data={mockArticleData} blocks={[]} />);

    const title = screen.getByText(mockArticleData.title);
    const author = screen.getByText(mockArticleData.author);
    const publishDate = screen.getByText(mockArticleData.publishDate);

    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(publishDate).toBeInTheDocument();
  });

  it("should render article thumbnail with proper props", () => {
    render(<Article data={mockArticleData} blocks={[]} />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });

  it("should render article tags with proper text and highlighting", () => {
    render(<Article data={mockArticleData} blocks={[]} />);

    const tags = screen.getAllByRole("tag");

    expect(tags.length).toBe(mockArticleData.tags.length);

    const firstTag = tags[0];
    expect(firstTag).toHaveTextContent(mockArticleData.tags[0]);
    expect(firstTag).toHaveClass(classes.highlighted);

    const secondTag = tags[1];
    expect(secondTag).toHaveTextContent(mockArticleData.tags[1]);
    expect(secondTag).not.toHaveClass(classes.highlighted);
  });
});
