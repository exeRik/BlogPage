import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Center, Text, Image } from "@mantine/core";
import { fetchBlogs } from "../data/api"; // your API fetch function

export default function BlogDetail() {
  const { slug } = useParams(); // get slug from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      setLoading(true);
      const blogs = await fetchBlogs();
      const foundBlog = blogs.find(b => b.slug === slug); // match by slug
      setBlog(foundBlog || null);
      setLoading(false);
    };
    getBlog();
  }, [slug]);

  if (loading) {
    return (
      <Center style={{ minHeight: "100vh" }}>
        <Text>Loading blog...</Text>
      </Center>
    );
  }

  if (!blog) {
    return (
      <Center style={{ minHeight: "100vh" }}>
        <Text>Blog not found.</Text>
      </Center>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <Text size="xl" weight={700} mb="sm">{blog.title}</Text>
      <Text size="sm" color="gray" mb="md">
        {blog.author} | {blog.date} | {blog.readTime}
      </Text>
      <Image src={blog.image} alt={blog.title} mb="md" />
      <Text size="md">{blog.description}</Text>
    </div>
  );
}
