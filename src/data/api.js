import { slugify } from "../utils/slugify";


export const fetchBlogs = async () => {
  try {
    const response = await fetch("http://192.168.1.114:3000/api/blogs");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const result = await response.json();
    console.log("Raw API response:", result);

    const blogsArray = Array.isArray(result.data) ? result.data : [];


    const transformedBlogs = blogsArray.map((blog, index) => ({
      id: blog.id || index + 1,
      title: blog.Title || "Untitled",
      category: blog.category || "General",
      author: blog.Author.Name || "Unknown",
      date:  new Date().toISOString().split("T")[0],
      readTime: "5 min",
      description: blog.Content || "No description available.",
      slug: blog.slug,
      image:`http://192.168.1.114:8055/assets/${blog.image.id}`

    }));

    console.log("Transformed Blogs:", transformedBlogs);

    return transformedBlogs;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
};
