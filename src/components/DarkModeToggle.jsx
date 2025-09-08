
import { ActionIcon } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function DarkModeToggle({ dark, accentColor, toggle }) {
  return (
    <ActionIcon
      variant="filled"
      color={accentColor}
      onClick={toggle}
      size="lg"
      radius="xl"
      title="Toggle color scheme"
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {dark ? <IconSun size={24} /> : <IconMoon size={24} />}
    </ActionIcon>
  );
}
