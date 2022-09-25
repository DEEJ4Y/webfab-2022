import Head from "next/head";
import { useTheme } from "@emotion/react";
import { Container, Grid, Paper, Text, Title } from "@mantine/core";
import InstagramEmbed from "../InstaEmbed/InstaEmbed";
import activities from "../../../../data/activities";

export default function InstaActivities() {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.colors.gray[0] }}>
      <Head>
        <title>Activities | NWC Association SRM</title>
        <meta
          name="description"
          content="Have a look at the different activities of Networking and Communications Association SRMIST."
        />
      </Head>
      <Container py="xl">
        <Title order={1} variant="gradient" align="center">
          Our Activities
        </Title>
        <Text align="center" mb="lg">
          Have a look at the different events we have conducted.
        </Text>
        <Grid>
          {activities?.slice(0, 9)?.map((url, idx) => (
            <Grid.Col key={url + idx} lg={4} md={6} sm={12}>
              <Paper radius="md" p={0}>
                <InstagramEmbed url={url} />
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
