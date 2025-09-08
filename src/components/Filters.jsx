import { Group, Input, Select } from "@mantine/core";

export default function Filters({ dark, fontFamily, accentColor, search, setSearch, category, setCategory, sortOrder, setSortOrder }) {
  return (
    <Group grow spacing="md" style={{ flexWrap: "wrap", marginBottom: "2rem" }}>
      <Input
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        radius="md"
        styles={{
          input: {
            borderColor: dark ? "#444" : "#ddd",
            color: dark ? "#fff" : "#000",
            fontFamily,
            fontSize: "0.95rem",
            "&:focus": {
              borderColor: accentColor,
              boxShadow: `0 0 0 2px ${accentColor}33`,
            },
          },
        }}
      />

      <Select
        value={category}
        onChange={setCategory}
        data={["All", "Tech", "Fashion", "Food", "Travel", "Lifestyle"]}
        radius="md"
        styles={{
          input: {
            fontFamily,
            fontSize: "0.95rem",
            color: dark ? "#fff" : "#000",
          },
        }}
      />

      <Select
        value={sortOrder}
        onChange={setSortOrder}
        data={[
          { value: "newest", label: "Newest First" },
          { value: "oldest", label: "Oldest First" },
        ]}
        radius="md"
        styles={{
          input: {
            fontFamily,
            fontSize: "0.95rem",
            color: dark ? "#fff" : "#000",
          },
        }}
      />
    </Group>
  );
}
