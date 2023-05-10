import { Button, HStack, Input } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { FormEventHandler, useState } from "react";
import { Recipe } from "../../types";
import { db } from "../../util/firebase";

type SaveRecipeProps = {
  recipe: Recipe;
  userId: string;
};

export const saveRecipe = async ({ recipe, userId }: SaveRecipeProps) => {
  const recipeList = collection(db, "recipes");
  await addDoc(recipeList, {
    name: recipe.name,
    type: recipe.type,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    author: recipe.author,
    savedBy: [userId],
  });
};

const SaveControl = ({ recipe, userId }: SaveRecipeProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSaveRecipe: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await saveRecipe({ recipe, userId });
      alert("Recipe saved successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving the recipe");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSaveRecipe}>
      <HStack shouldWrapChildren>
        <Button colorScheme="green" type="submit" isLoading={isLoading}>
          Save Recipe
        </Button>
      </HStack>
    </form>
  );
};

export default SaveControl;
