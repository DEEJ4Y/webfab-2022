import { useTheme } from "@emotion/react";
import { Container, Grid, Tabs, Text, Title } from "@mantine/core";
import {
  IconCalendarEvent,
  IconCurrencyDollar,
  IconDeviceAnalytics,
  IconFileDollar,
  IconPalette,
} from "@tabler/icons";
import Head from "next/head";
import team from "../data/team";
import TeamMember from "../components/pages/team/TeamMember/TeamMember";

const { facultyHeads, boardMembers, domainHeads, members } = team;
const { events, creatives, technical, finance, sponsorship } = members;

export const TeamMembersGrid = ({ team }) => {
  return (
    <Grid justify="center">
      {team?.map((memberData, idx) => (
        <Grid.Col key={`${memberData.name}-${idx}`} lg={4} sm={6} xs={12}>
          <TeamMember {...memberData} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default function Team() {
  const theme = useTheme();

  return (
    <div>
      <Head>
        <title>Team | NWC Association SRM</title>
        <meta
          name="description"
          content="Meet the team of Networking and Communications Association SRMIST."
        />
      </Head>
      <div style={{ backgroundColor: theme.colors.gray[0] }}>
        <Container py="xl">
          <Title order={1} align="center" variant="gradient">
            Our Team
          </Title>
          <Text align="center" mb="lg">
            Meet the team behind NWC Association SRMIST.
          </Text>

          <Title order={2} align="center" mb="md">
            Faculty Heads
          </Title>
          <TeamMembersGrid team={facultyHeads} />
        </Container>
      </div>

      <Container py="xl">
        <Title order={2} align="center" mb="md">
          Board Members
        </Title>
        <TeamMembersGrid team={boardMembers} />
      </Container>

      <div style={{ backgroundColor: theme.colors.gray[0] }}>
        <Container py="xl">
          <Title order={2} align="center" mb="md">
            Domain Heads
          </Title>
          <TeamMembersGrid team={domainHeads} />
        </Container>
      </div>

      <Container py="xl">
        <Title order={2} align="center" mb="md">
          Team Members
        </Title>

        <Tabs defaultValue="events">
          <Tabs.List position="center">
            <Tabs.Tab value="events" icon={<IconCalendarEvent size={24} />}>
              Events
            </Tabs.Tab>
            <Tabs.Tab value="creatives" icon={<IconPalette size={24} />}>
              Creatives
            </Tabs.Tab>
            <Tabs.Tab
              value="technical"
              icon={<IconDeviceAnalytics size={24} />}
            >
              Technical
            </Tabs.Tab>
            <Tabs.Tab value="finance" icon={<IconCurrencyDollar size={24} />}>
              Finance
            </Tabs.Tab>
            <Tabs.Tab value="sponsorship" icon={<IconFileDollar size={24} />}>
              Sponsorship
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="events" pt="md">
            <TeamMembersGrid team={events} />
          </Tabs.Panel>
          <Tabs.Panel value="creatives" pt="md">
            <TeamMembersGrid team={creatives} />
          </Tabs.Panel>
          <Tabs.Panel value="technical" pt="md">
            <TeamMembersGrid team={technical} />
          </Tabs.Panel>
          <Tabs.Panel value="finance" pt="md">
            <TeamMembersGrid team={finance} />
          </Tabs.Panel>
          <Tabs.Panel value="sponsorship" pt="md">
            <TeamMembersGrid team={sponsorship} />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </div>
  );
}
