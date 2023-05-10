import { useState } from "react";
import { Button, FormControl, FormLabel, Heading, List, ListItem, ListIcon, Select, Text, VStack, Textarea } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import apiKey from "../config";

type RecipeType = "Breakfast" | "Lunch" | "Dinner" | "Dessert";

const RecipeGeneratorPage = () => {
  const [recipeType, setRecipeType] = useState<RecipeType>("Breakfast");
  const [recipeName, setRecipeName] = useState<string>("");
  const [recipeIngredients, setRecipeIngredients] = useState<string>("");
  const [recipeInstructions, setRecipeInstructions] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRecipeTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRecipeType(event.target.value as RecipeType);
  };

  const { Configuration, OpenAIApi } = require("openai");

  const key: string = `${process.env.REACT_APP_API_KEY}`;

  console.log(key)
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
    organization: "org-GaBNRzuTQqo5qLEULfjgwT2B"
  });

  const openai = new OpenAIApi(configuration);

  const handleGenerateRecipe = async () => {
    setIsLoading(true);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate a ${recipeType} recipe and the name of the dish`,
      max_tokens: 1024,
      temperature: 0.8,
    });

    const recipeText = response.data.choices[0].text.trim();
    console.log(recipeText)
    // Split the recipe into a list of ingredients and instructions and name
    const recipeName = recipeText[0];
    const ingredientsStartIndex = recipeText.indexOf("Ingredients:");
    const ingredientsEndIndex = recipeText.indexOf("Instructions:");
    const ingredients = recipeText.slice(ingredientsStartIndex + 12, ingredientsEndIndex).split("\n");

    const instructions = recipeText.slice(ingredientsEndIndex + 13).split("\n");

    // Remove any empty items from the list
    const filteredIngredients = ingredients.filter((item: string) => item !== "");
    const filteredInstructions = instructions.filter((item: string) => item !== "");

    setRecipeName(recipeText.slice(recipeName + 11, ingredientsStartIndex).trim());
    setRecipeIngredients(filteredIngredients.join("\n"));
    setRecipeInstructions(filteredInstructions.join("\n"));
    setIsLoading(false);
  };

  return (
    <Layout title="Recipe Generator">
      <VStack spacing={4} align="flex-start">
        <FormControl id="recipe-type">
          <FormLabel fontWeight="bold" fontSize="lg">Type of recipe</FormLabel>
          <Select value={recipeType} onChange={handleRecipeTypeChange}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
          </Select>
        </FormControl>
        <Button colorScheme="purple" size="lg" onClick={handleGenerateRecipe} isLoading={isLoading}>
          Generate Recipe
        </Button>
        {recipeName && (
          <>
            <Heading as="h2" size="lg">
              {recipeName}
            </Heading>
            <FormControl id="recipe-ingredients">
              <FormLabel fontWeight="bold" fontSize="lg">Ingredients:</FormLabel>
              <Textarea value={recipeIngredients} readOnly />
            </FormControl>
            <FormControl id="recipe-instructions">
              <FormLabel fontWeight="bold" fontSize="lg">Instructions:</FormLabel>
              <Textarea value={recipeInstructions} readOnly />
            </FormControl>
          </>
        )}
      </VStack>
    </Layout>
  );
};


export default RecipeGeneratorPage;

