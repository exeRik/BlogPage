import { Card, Image, Text, Group } from "@mantine/core";
import { Link } from "react-router-dom";

export default function BlogCard({ blog, cardColor, primaryText, secondaryText, accentColor, fontFamily, cardHeight, imageHeight }) {
  return (
    <Card component={Link} to={`/blog/${blog.slug}`} shadow="md" padding="md" radius="md" withBorder
          style={{ height: cardHeight, display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: cardColor, textDecoration: "none" }}>
      <div>
        <Card.Section>
          <Image fit="fill" src={blog.image} height={imageHeight} alt={blog.title} style={{ borderRadius: 8 }} />
        </Card.Section>

        <Text fw={600} size="md" mt="sm" lineClamp={2} color={primaryText}>{blog.title}</Text>
        <Text size="sm" mt="xs" lineClamp={3} color={secondaryText}  dangerouslySetInnerHTML={{ __html: blog.description }} 
>
          {/* {blog.description} */}
          </Text>
      </div>

      <Group position="apart" mt="sm">
        <Text size="xs" color={secondaryText}>{blog.author} • {blog.readTime}</Text>
        <Text size="xs" weight={500} color={accentColor} style={{ fontFamily }}>Read More</Text>
      </Group>
    </Card>
  );
}
