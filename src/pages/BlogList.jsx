// src/pages/BlogList.jsx
import { Grid, Card, Image, Text, Button, Group, Select, Input } from "@mantine/core";
import { Link } from "react-router-dom";

import { useBlogs } from "../hooks/useBlogs";
import { useSorting } from "../hooks/useSorting";
import { useFiltering } from "../hooks/useFiltering";

import { useState } from "react";

export default function BlogList() {
  const { blogs } = useBlogs();
  const { sortOrder, setSortOrder, sortBlogs } = useSorting();
  const { category, setCategory, search, setSearch, filterBlogs } = useFiltering();
  const [visibleCount, setVisibleCount] = useState(6);

  let filtered = filterBlogs(blogs);
  let sorted = sortBlogs(filtered);
  let visibleBlogs = sorted.slice(0, visibleCount);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Latest Articles</h1>
      <p style={{ textAlign: "center" }}>
        Discover amazing articles about technology, lifestyle, travel, and more
      </p>

      {/* Filters */}
      <Group position="center" spacing="md" mt="lg">
        <Input
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          value={category}
          onChange={setCategory}
          data={["All", "Tech", "Fashion", "Food", "Travel", "Lifestyle"]}
        />
        <Select
          value={sortOrder}
          onChange={setSortOrder}
          data={[
            { value: "newest", label: "Newest First" },
            { value: "oldest", label: "Oldest First" },
          ]}
        />
      </Group>

      {/* Blog Grid */}
       

           <Grid mt="lg">
        {visibleBlogs.map((blog) => (
          <Grid.Col span={4} key={blog.id}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={blog.image} height={160} alt={blog.title} />
              </Card.Section>
              <Text weight={500} size="lg" mt="md">
                {blog.title}
              </Text>
              <Text size="sm" color="dimmed">{blog.description}</Text>
              <Group position="apart" mt="md">
                <Text size="xs">{blog.author} • {blog.readTime}</Text>
                <Button size="xs" component={Link} to={`/blog/${blog.slug}`}>
                  Read More
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* Load More */}
      {visibleCount < sorted.length && (
        <Group position="center" mt="lg">
          <Button onClick={() => setVisibleCount((prev) => prev + 3)}>Load More</Button>
        </Group>
      )}
    </div>
  );
}
