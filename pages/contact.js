import { useTheme } from "@emotion/react";
import {
  TextInput,
  Textarea,
  Group,
  Title,
  Button,
  Grid,
  Text,
  Container,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.colors.gray[0] }}>
      <form onSubmit={form.onSubmit(() => {})}>
        <Container py="xl">
          <Title align="center" variant="gradient">
            Get in touch
          </Title>
          <Text align="center">
            Send us a message and we will get back to you.
          </Text>

          <Grid cols={2} mt="md" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
            <Grid.Col md={6}>
              <TextInput
                label="Name"
                placeholder="Your name"
                name="name"
                variant="filled"
                {...form.getInputProps("name")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                label="Email"
                placeholder="Your email"
                name="email"
                variant="filled"
                {...form.getInputProps("email")}
              />
            </Grid.Col>
          </Grid>

          <TextInput
            label="Subject"
            placeholder="Subject"
            mt="md"
            name="subject"
            variant="filled"
            {...form.getInputProps("subject")}
          />
          <Textarea
            mt="md"
            label="Message"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps("subject")}
          />

          <Group position="center" mt="lg">
            <Button type="submit" size="md" variant="outline">
              Send message
            </Button>
          </Group>
        </Container>
      </form>
    </div>
  );
}
