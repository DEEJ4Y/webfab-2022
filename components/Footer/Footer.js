import {
  createStyles,
  Anchor,
  Group,
  ActionIcon,
  Container,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons";
import Link from "next/link";
import NWCLogo from "../Logos/NWC";
import SOCLogo from "../Logos/SOC";
import SRMLogo from "../Logos/SRM";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colors.gray[0],
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  const links = [];

  const items = links.map((link) => (
    <Anchor
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.inner}>
          <Group spacing="lg">
            <NWCLogo size={32} />
            <SOCLogo size={80} />
            <SRMLogo size={80} />
          </Group>

          <Group spacing="xs" className={classes.links}>
            {items}
          </Group>

          <Group spacing="xs" position="right" noWrap>
            <Link passHref href="https://twitter.com/nwcsrmist">
              <ActionIcon
                size="lg"
                radius="xl"
                aria-label="Link to Twitter Page"
              >
                <IconBrandTwitter size={18} stroke={1.5} />
              </ActionIcon>
            </Link>
            <Link passHref href="https://www.linkedin.com/company/nwcsrmist">
              <ActionIcon
                size="lg"
                radius="xl"
                aria-label="Link to Linkedin Page"
              >
                <IconBrandLinkedin size={18} stroke={1.5} />
              </ActionIcon>
            </Link>
            <Link passHref href="mailto:nwc.srmist@gmail.com">
              <ActionIcon
                size="lg"
                radius="xl"
                aria-label="Open mail client with email address"
              >
                <IconMail size={18} stroke={1.5} />
              </ActionIcon>
            </Link>
            <Link passHref href="https://www.instagram.com/nwcsrmist">
              <ActionIcon
                size="lg"
                radius="xl"
                aria-label="Link to Instagram Page"
              >
                <IconBrandInstagram size={18} stroke={1.5} />
              </ActionIcon>
            </Link>
          </Group>
        </div>
      </Container>
    </div>
  );
}
