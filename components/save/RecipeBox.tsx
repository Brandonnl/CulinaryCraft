import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { Recipe } from "../../types";
import { db } from "../../util/firebase";

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const handleDeleteRecipe = async () => {
    try {
      await deleteDoc(doc(db, "recipes", recipe.id));
      alert("Recipe deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while deleting the recipe");
    }
  };

  return (
    <Box p={4} borderWidth={1} borderRadius={8} shadow="md">
      <Heading as="h3" size="md" mb={2}>
        {recipe.name}
      </Heading>
      <VStack align="start">
        <Text fontWeight="bold">Type:</Text>
        <Text>{recipe.type}</Text>
        <Text fontWeight="bold">Ingredients:</Text>
        <Text whiteSpace="pre-wrap">{recipe.ingredients}</Text>
        <Text fontWeight="bold">Instructions:</Text>
        <Text whiteSpace="pre-wrap">{recipe.instructions}</Text>
        <Button colorScheme="red" onClick={handleDeleteRecipe}>Delete Recipe</Button>
      </VStack>
    </Box>
  );
};

export default RecipeCard;
