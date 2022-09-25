import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Text,
  Drawer,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NWCLogo from "../Logos/NWC";
import { useRouter } from "next/router";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export default function Navbar() {
  const router = useRouter();

  const links = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Team",
      link: "/team",
    },
    {
      label: "Activities",
      link: "/activities",
    },
    {
      label: "Contact Us",
      link: "/contact",
    },
  ];

  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link key={link.label} passHref href={link.link}>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: router?.pathname === link.link,
        })}
      >
        {link.label}
      </a>
    </Link>
  ));

  const drawerItems = links.map((link) => (
    <Link key={link.label} passHref href={link.link}>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: router?.pathname === link.link,
        })}
        style={{ padding: "24px" }}
      >
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header height={60}>
      <Container className={classes.header} pl={28}>
        <Link passHref href="/">
          <a style={{ color: "black", textDecoration: "none" }}>
            <Group>
              <div style={{ position: "relative" }}>
                <NWCLogo className="nav-logo" size={40} />
              </div>
              <Text weight="bold" ml="sm">
                NWC Association SRMIST
              </Text>
            </Group>
          </a>
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          aria-label="Toggle menu button"
        ></Burger>
      </Container>
      <Drawer
        opened={opened}
        position="right"
        padding={16}
        onClose={() => toggle(false)}
      >
        {drawerItems}
      </Drawer>
    </Header>
  );
}
