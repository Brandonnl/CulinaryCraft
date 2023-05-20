import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const WelcomePage = () => (
  <Layout title="Welcome">
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        overflow: hidden;
      }
    `}</style>

    <Flex justify="center" align="center" minH="100vh" bg="transparent"> {/* Set the background to transparent */}
      <VStack
        spacing={4}
        bg="transparent" // Set the background to transparent
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxW="400px"
        w="100%"
        align="center"
      >
        <Heading
          as="h1"
          size="4xl"
          fontWeight="bold"
          textAlign="center"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
          color="purple.700"
        >
          Recipe Generator
        </Heading>
        <Text fontSize="xl" textAlign="center" color="gray.700">
          Get inspired with new and exciting recipes.
        </Text>
        <Box>
          <Link href="/generate">
            <Button
              colorScheme="purple"
              size="lg"
              _hover={{ bg: "purple.700" }}
            >
              Generate Recipe
            </Button>
          </Link>
        </Box>
      </VStack>
    </Flex>
  </Layout>
);

export default WelcomePage;
