/* eslint-disable @next/next/no-img-element */
import { Container, Grid, Title, Text } from "@mantine/core";
import {
  IconDeviceDesktopAnalytics,
  IconPalette,
  IconUserCheck,
  IconUserPlus,
} from "@tabler/icons";
import VisionCard from "./VisionCard";

export default function Vision() {
  return (
    // <Container pb="xl">
    //   <Grid cols={2}>
    //     <Grid.Col md={6} sm={12}>
    //       <Container
    //         pt="xl"
    //         px={"xs"}
    //         style={{
    //           height: "100%",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <div>
    //           <img
    //             src="/vision-and-mission.webp"
    //             alt="vision"
    //             style={{ maxWidth: "200px" }}
    //           />
    //         </div>
    //       </Container>
    //     </Grid.Col>
    //     <Grid.Col md={6} sm={12}>
    //       <Container
    //         pt="xl"
    //         style={{
    //           height: "100%",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <div>
    //           <Title order={2} mb="sm">
    //             Vision and Objective
    //           </Title>
    //           <Text>
    //             NWC aims to develop virtuous students with a diverse approach
    //             that would showcase their holistic development. The department
    //             comprises industrially and academically sound faculty members
    //             led by a very proficient President, Ms M. Safa. The
    //             department&apos;s research focuses on developing new and
    //             creative ideas that manifest students&apos; zeal to achieve
    //             higher in life. Using technical methodologies, the organisation
    //             concentrates on providing insights into the future scope of
    //             development or improving the pre-existing ones.
    //           </Text>
    //         </div>
    //       </Container>
    //     </Grid.Col>
    //   </Grid>
    // </Container>
    <Container py="xl">
      <Title order={2} mb="md" align="center">
        Vision and Objective
      </Title>
      <Grid justify="center">
        <Grid.Col md={6} sm={12}>
          <VisionCard
            color="teal"
            icon={<IconUserPlus />}
            title="Develop Students"
            content="NWC aims to develop virtuous students with a diverse approach that would showcase their holistic development."
          />
        </Grid.Col>
        <Grid.Col md={6} sm={12}>
          <VisionCard
            color="yellow"
            icon={<IconUserCheck />}
            title="Strong Leadership"
            content="The department comprises industrially and academically sound faculty members led by a very proficient President, Ms M. Safa."
          />
        </Grid.Col>
        <Grid.Col md={6} sm={12}>
          <VisionCard
            icon={<IconPalette />}
            title="Creative Ideology"
            content="The department's research focuses on developing new and creative ideas that manifest students' zeal to achieve higher in life."
          />
        </Grid.Col>
        <Grid.Col md={6} sm={12}>
          <VisionCard
            color="grape"
            icon={<IconDeviceDesktopAnalytics />}
            title="Providing Insights"
            content="Using technical methodologies, the organisation concentrates on providing insights into the future scope of development or improving the pre-existing ones."
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
