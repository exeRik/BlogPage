
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import { Card, Image, Text } from "@mantine/core";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <h2 style={{ textAlign: "center" }}>Blog not found</h2>;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ margin: "2rem auto", maxWidth: "800px" }}>
      <Card.Section>
        <Image src={blog.image} height={300} alt={blog.title} />
      </Card.Section>
      <Text size="xl" weight={700} mt="md">{blog.title}</Text>
      <Text size="sm" color="dimmed">{blog.author} • {blog.date}</Text>
      <Text mt="md">{blog.description}</Text>
    </Card>
  );
}
