import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import { Text, Image, Badge, Group, Anchor, ScrollArea } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { theme } from "../utils/theme";
import { Link } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  if (!blog)
    return (
      <Text
        align="center"
        size="xl"
        mt="xl"
        color={dark ? theme.colors.darkPrimary : theme.colors.lightPrimary}
      >
        Blog not found
      </Text>
    );

  const bgColor = dark ? theme.colors.darkBg : theme.colors.lightBg;
  const textColor = dark ? theme.colors.darkSecondary : theme.colors.lightSecondary;
  const titleColor = dark ? theme.colors.darkPrimary : theme.colors.lightPrimary;
  const accentColor = dark ? theme.colors.darkAccent : theme.colors.lightAccent;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        width: "100%",
        fontFamily: theme.fontFamily,
        padding: "4rem 8%",
        color: textColor,
      }}
    >
      <Anchor
        component={Link}
        to="/"
        color={accentColor}
        mb="2rem"
        style={{ display: "inline-block", marginBottom: "2rem", fontWeight: 500 }}
      >
        ← Back to Blog List
      </Anchor>


      <Text
        size="5xl"
        weight={700}
        style={{ color: titleColor, lineHeight: 1.3, marginBottom: "1rem" }}
      >
        {blog.title}
      </Text>

      {/* Metadata */}
      <Group spacing="md" mb="2rem">
        <Text size="sm" color={textColor}>
          {blog.author} • {blog.date}
        </Text>
        {blog.category && <Badge color={accentColor}>{blog.category}</Badge>}
      </Group>

      {/* Blog Image */}
      <Image
        src={blog.image}
        height={400}
        alt={blog.title}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "2rem" }}
      />

      {/* Blog Description */}
      <ScrollArea style={{ height: "auto" }}>
        <article style={{ fontSize: "1.05rem", lineHeight: 1.8, color: textColor }}>
          {blog.description}
        </article>
      </ScrollArea>
    </div>
  );
}
