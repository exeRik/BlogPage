import { useState } from "react";

export const useFiltering = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filterBlogs = (blogs) => {
    return blogs.filter((blog) => {
      const matchesCategory =
        category === "All" || blog.category.toLowerCase() === category.toLowerCase();
      const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  return { category, setCategory, search, setSearch, filterBlogs };
};
