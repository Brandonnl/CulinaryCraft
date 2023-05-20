import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { Box, Container } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => (
  <div
    style={{
      backgroundImage: `url("/background.jpeg")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "top",
      minHeight: "100vh",
    }}
  >
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/recipe.ico" />
    </Head>
    <Navbar />
    <Container my={0} p={0} display="flex" justifyContent="center" alignItems="center" height="100%">
      <Box
        bg="rgba(255, 255, 255, .8)"
        p={4}
        borderRadius="md"
        boxShadow="lg"
        maxWidth="500px"
        width="200%"
      >
        {children}
      </Box>
    </Container>
  </div>
);

export default Layout;
