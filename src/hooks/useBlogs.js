// BlogList.jsx
import { useState, useEffect } from "react";
import { fetchBlogs } from "../data/api"; // your API fetch

const [blogs, setBlogs] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const getBlogs = async () => {
    setLoading(true);
    const data = await fetchBlogs();
    setBlogs(data);
    setLoading(false);
  };
  getBlogs();
}, []);
