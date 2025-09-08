import { Card, Image, Text, Group, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function BlogCard({ blog, cardColor, primaryText, secondaryText, accentColor, fontFamily, cardHeight, imageHeight }) {
  return (
    <Card
      shadow="md"
      padding="md"
      radius="md"
      withBorder
      style={{
        height: cardHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: cardColor,
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      <div>
        <Card.Section>
          <Image
            src={blog.image}
            height={imageHeight}
            alt={blog.title}
            style={{ borderRadius: "8px" }}
          />
        </Card.Section>
        <Text fw={600} size="md" mt="sm" lineClamp={2} color={primaryText}>
          {blog.title}
        </Text>
        <Text size="sm" mt="xs" lineClamp={3} color={secondaryText}>
          {blog.description}
        </Text>
      </div>

      <Group position="apart" mt="sm">
        <Text size="xs" color={secondaryText}>
          {blog.author} • {blog.readTime}
        </Text>
        <Button
          size="xs"
          component={Link}
          variant="light"
          color={accentColor}
          styles={{ root: { fontFamily, fontWeight: 500 } }}
        >
          Read More
        </Button>
      </Group>
    </Card>
  );
}
