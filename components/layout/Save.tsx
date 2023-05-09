import firebase from "firebase/app";
import "firebase/firestore";
import { useState } from "react";
import { Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { db } from "../../util/firebase"


type Recipe = {
  name: string;
  ingredients: string;
  instructions: string;
};

const SaveRecipe = ({ recipe }: { recipe: Recipe }) => {
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await db.collection("recipes").add({
        name: name || recipe.name,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
      });
      setName("");
    } catch (error) {
      console.error("Error saving recipe: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack spacing={4} align="flex-start">
      <FormControl id="recipe-name">
        <FormLabel fontSize="lg" fontWeight="bold">
          Recipe Name
        </FormLabel>
        <Input type="text" value={name} onChange={handleNameChange} placeholder={recipe.name} />
      </FormControl>
      <Button colorScheme="purple" size="lg" onClick={handleSave} isLoading={isLoading}>
        Save Recipe
      </Button>
    </VStack>
  );
};

export default SaveRecipe;
