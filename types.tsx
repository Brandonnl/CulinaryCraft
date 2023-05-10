export type RecipeType = "Breakfast" | "Lunch" | "Dinner" | "Dessert";

export type Recipe = {
  name: string;
  type: RecipeType;
  ingredients: string;
  instructions: string;
  author: string;
  id: string;
};

