import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>NWC Association SRM</title>
        <meta
          name="description"
          content="The 'Department of Networking and Communications' or NWC is a student association formed exclusively for the Specializations in Information Technology, Internet of Things, Computer Networking, Cybersecurity, and Cloud Computing of the Computer Science Engineering branch under the umbrella of 'School of Computing'."
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: {
            nwc: [
              "#e1ecff",
              "#c4d9ff",
              "#a6c6ff",
              "#88b4ff",
              "#6ba1ff",
              "#4d8eff",
              "#307bff",
              "#1268ff",
              "#0059f3",
              "#004ed6",
            ],
          },
          primaryColor: "nwc",
          colorScheme: "light",
          defaultGradient: {
            from: "nwc",
            to: "black",
            deg: 15,
          },
          spacing: {
            xl: 80,
          },
          fontSizes: {
            xs: 10,
            sm: 12,
            md: 14,
            lg: 16,
            xl: 20,
          },
        }}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </>
  );
}
