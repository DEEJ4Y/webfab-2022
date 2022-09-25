import { useTheme } from "@emotion/react";
import { Divider } from "@mantine/core";
import Hero from "../components/pages/home/Hero/Hero";
import Vision from "../components/pages/home/Vision/Vision";

export default function Home() {
  const theme = useTheme();

  return (
    <div>
      <Hero />
      <Divider color={theme.colors.gray[2]} />
      <Vision />
    </div>
  );
}
