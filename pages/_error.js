import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Group,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 180,
    paddingBottom: 180,
  },

  inner: {
    position: "relative",
  },

  image: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 0,
    opacity: 0.75,
  },

  content: {
    position: "relative",
    zIndex: 1,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: "auto",
  },
}));

export default function ErrorPage() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title} mb="lg">
            Nothing to see here
          </Title>
          <Text
            color="dimmed"
            size="lg"
            align="center"
            className={classes.description}
            mb="lg"
          >
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Text align="center" mb="sm">
            Use the links to get back to us.
          </Text>
          <Group position="center">
            <Link passHref href="/">
              <Button size="md">Take me back to home page</Button>
            </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
}
