// useSorting.js
import { useState } from "react";

export const useSorting = (initial = "newest") => {
  const [sortOrder, setSortOrder] = useState(initial);

  const sortBlogs = (blogs) => {
    return [...blogs].sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );
  };

  return { sortOrder, setSortOrder, sortBlogs };
};
