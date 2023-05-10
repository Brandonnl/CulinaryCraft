import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { collection, onSnapshot, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { Recipe } from "../../types";
import { db } from "../../util/firebase";
import { useAuth } from "../auth/AuthUserProvider";
import Layout from "../layout/Layout";
import RecipeCard from "./RecipeBox";


const SavedRecipesPage = () => {
  const { user } = useAuth();
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "recipes"), where("savedBy", "array-contains", user.uid));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const recipes: Recipe[] = [];
        snapshot.forEach((doc) => {
          const recipe = {
            id: doc.id,
            ...doc.data(),
          } as unknown as Recipe;
          recipes.push(recipe);
        });
        setSavedRecipes(recipes);
      });
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  return (
    <Layout title="Saved Recipes">
      <Container maxW="container.xl" colorScheme="purple">
        <Box my={6}>
          <Heading as="h1" size="xl" mb={6} color="purple.600">
            Your Saved Recipes
          </Heading>
          <VStack spacing={6} align="stretch">
            {savedRecipes.map((recipe) => (
              <RecipeCard key={recipe.author} recipe={recipe} />
            ))}
          </VStack>
        </Box>
      </Container>
    </Layout>
  );
};

export default SavedRecipesPage;
