import { Grid, Text } from "@mantine/core";

export default function InfoCard({ icon, title, info }) {
  return (
    <Grid>
      <Grid.Col xs={3} pt="md">
        {icon}
      </Grid.Col>
      <Grid.Col xs={9}>
        <Text weight="bold">{title}</Text>
        <Text color="dimmed">{info}</Text>
      </Grid.Col>
    </Grid>
  );
}
