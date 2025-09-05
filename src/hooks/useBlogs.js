
import { useState } from "react";
import { blogs as blogData } from "../data/blogs";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState(blogData);
  return { blogs, setBlogs };
};
