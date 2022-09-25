/* eslint-disable @next/next/no-img-element */
import { useTheme } from "@emotion/react";
import { Button, Container, Grid, Title, Text } from "@mantine/core";
import { IconRocket } from "@tabler/icons";
import Link from "next/link";

export default function Hero() {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colors.gray[0],
        position: "relative",
        top: "8px",
      }}
    >
      <Container pb="xl">
        <Grid cols={2}>
          <Grid.Col md={6} sm={12}>
            <Container
              pt="xl"
              px={"xs"}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <Title order={1} variant="gradient">
                  Department of Networking and Communications
                </Title>
                <Text mt="sm">
                  The &apos;Department of Networking and Communications&apos; or
                  NWC is a <em>student association</em> formed exclusively for
                  the Specializations in Information Technology, Internet of
                  Things, Computer Networking, Cybersecurity, and Cloud
                  Computing of the Computer Science Engineering branch under the
                  umbrella of &apos;School of Computing&apos;.
                </Text>
                <Link passHref href="/activities">
                  <Button
                    size="md"
                    mt="sm"
                    leftIcon={<IconRocket />}
                    variant="gradient"
                  >
                    Our Activities
                  </Button>
                </Link>
              </div>
            </Container>
          </Grid.Col>
          <Grid.Col md={6} sm={12}>
            <Container
              pt="xl"
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/favicon.png" alt="NWC logo" width="75%" />
            </Container>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
