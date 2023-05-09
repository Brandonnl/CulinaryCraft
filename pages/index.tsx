import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import Layout from "../components/layout/Layout"
import Link from "next/link"


const WelcomePage = () => (
  <Layout title="Welcome">
    <Flex justify="center" align="center" minH="100vh" bgImage="/background.jpeg" bgSize="cover" bgPosition="center">
      <VStack spacing={4} bg="white" p={8} borderRadius="md">
        <Heading as="h1" size="4xl" fontWeight="bold" textAlign="center">
          Recipe Generator
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Get inspired with new and exciting recipes.
        </Text>
        <Box>
          <Link href="/generate">
            <Button colorScheme="purple" size="lg">
              Generate Recipe
            </Button>
          </Link>
        </Box>
      </VStack>
    </Flex>
  </Layout>
)

export default WelcomePage
