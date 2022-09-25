/* eslint-disable @next/next/no-img-element */
import { ActionIcon, Avatar, Group, Paper, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconUserCircle,
} from "@tabler/icons";
import Link from "next/link";

export default function TeamMember({
  name,
  imgUrl,
  department,
  role,
  bio,
  linkedin,
  personalWebsite,
  github,
}) {
  return (
    <Paper withBorder p={32} radius="md">
      <Avatar
        src={
          imgUrl || "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
        }
        alt={name}
        mx="auto"
        size={120}
        radius={120}
      />
      <Text align="center" size="lg" weight={500} mt="md">
        {name}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {role} {department ? "• " + department : ""}
      </Text>
      <Text align="center" mt="md">
        {bio}
      </Text>
      <Group position="center" mt="md">
        {!!linkedin ? (
          <Link passHref href={linkedin}>
            <ActionIcon size="lg" radius="xl">
              <IconBrandLinkedin />
            </ActionIcon>
          </Link>
        ) : (
          ""
        )}
        {!!personalWebsite ? (
          <Link passHref href={personalWebsite}>
            <ActionIcon size="lg" radius="xl">
              <IconUserCircle />
            </ActionIcon>
          </Link>
        ) : (
          ""
        )}
        {!!github ? (
          <Link passHref href={github}>
            <ActionIcon size="lg" radius="xl">
              <IconBrandGithub />
            </ActionIcon>
          </Link>
        ) : (
          ""
        )}
      </Group>
    </Paper>
  );
}
