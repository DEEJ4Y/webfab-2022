import { Paper, Text, ThemeIcon } from "@mantine/core";

export default function VisionCard({ icon, title, content, color }) {
  return (
    <Paper style={{ textAlign: "center", height: "100%" }} p="lg" withBorder>
      <ThemeIcon
        color={color ? color : "nwc"}
        variant="light"
        radius="32px"
        size="64px"
        mb="sm"
      >
        {icon}
      </ThemeIcon>

      <Text size="lg" weight="bold">
        {title}
      </Text>
      <Text>{content}</Text>
    </Paper>
  );
}
