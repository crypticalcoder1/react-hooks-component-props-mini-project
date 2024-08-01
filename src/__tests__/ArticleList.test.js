// src/__tests__/ArticleList.test.js
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
  },
  {
    id: 3,
    title: "Function Components vs Class Components",
    date: "December 10, 2020",
    preview: "React, meet OOJS.",
  },
];

test("renders a <main> element", () => {
  const { container } = render(<ArticleList posts={posts} />);
  expect(container.querySelector("main")).toBeInTheDocument();
});

test("renders an Article component for each post passed as a prop", () => {
  const { container } = render(<ArticleList posts={posts} />);
  const mainElement = container.querySelector("main");
  // Check the number of children inside <main>
  expect(mainElement).toBeInTheDocument();
  expect(mainElement.children).toHaveLength(posts.length);
});
