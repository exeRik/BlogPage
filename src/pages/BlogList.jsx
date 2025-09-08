import { Grid, Text, Center, Pagination } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { useState, useEffect } from "react";
import { fetchBlogs } from "../data/api"; 
import { useSorting } from "../hooks/useSorting";
import { useFiltering } from "../hooks/useFiltering";
import { theme } from "../utils/theme";
import BlogCard from "../components/BlogCard";
import Filters from "../components/Filters";
import DarkModeToggle from "../components/DarkModeToggle";

export default function BlogList() {
  const { sortOrder, setSortOrder, sortBlogs } = useSorting();
  const { category, setCategory, search, setSearch, filterBlogs } = useFiltering();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const blogsPerPage = 6;
  const [activePage, setActivePage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      const fetchedBlogs = await fetchBlogs();
      console.log("Fetched Blogs:", fetchedBlogs); 
      setBlogs(fetchedBlogs); 
      setLoading(false);
    };
    getBlogs();
  }, []);

  const filtered = filterBlogs(blogs); 
  const sorted = sortBlogs(filtered);
  const startIndex = (activePage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const visibleBlogs = sorted.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sorted.length / blogsPerPage);

  const colors = {
    bgColor: dark ? theme.colors.darkBg : theme.colors.lightBg,
    cardColor: dark ? theme.colors.darkCard : theme.colors.lightCard,
    primaryText: dark ? theme.colors.darkPrimary : theme.colors.lightPrimary,
    secondaryText: dark ? theme.colors.darkSecondary : theme.colors.lightSecondary,
    accentColor: dark ? theme.colors.darkAccent : theme.colors.lightAccent,
  };

  if (loading)
    return (
      <Center style={{ minHeight: "100vh", backgroundColor: colors.bgColor }}>
        <Text color={colors.primaryText}>Loading blogs...</Text>
      </Center>
    );

  return (
    <div style={{ padding: "2rem", minHeight: "100vh", backgroundColor: colors.bgColor }}>
      <DarkModeToggle dark={dark} accentColor={colors.accentColor} toggle={() => setColorScheme(dark ? "light" : "dark")} />
      <Text align="center" fw={800} size="xl" color={colors.primaryText}>Latest Articles</Text>
      <Text align="center" size="md" color={colors.secondaryText} mb="xl">Discover amazing articles about technology, lifestyle, travel, and more</Text>

      <Filters
        dark={dark}
        fontFamily={theme.fontFamily}
        accentColor={colors.accentColor}
        search={search} setSearch={setSearch}
        category={category} setCategory={setCategory}
        sortOrder={sortOrder} setSortOrder={setSortOrder}
      />

      {visibleBlogs.length === 0 ? (
        <Center mt="xl"><Text color={colors.primaryText}>No blogs match your search or filter.</Text></Center>
      ) : (
        <Grid mt="xl" gutter="xl">
          {visibleBlogs.map(blog => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={blog.id}>
              <BlogCard
                blog={blog}
                cardColor={colors.cardColor}
                primaryText={colors.primaryText}
                secondaryText={colors.secondaryText}
                accentColor={colors.accentColor}
                fontFamily={theme.fontFamily}
                cardHeight={theme.cardHeight}
                imageHeight={theme.imageHeight}
              />
            </Grid.Col>
          ))}
        </Grid>
      )}

      {totalPages > 1 && (
        <Center mt="xl">
          <Pagination page={activePage} onChange={setActivePage} total={totalPages} color={colors.accentColor} radius="md" />
        </Center>
      )}
    </div>
  );
}
