# Recipe Generator

This is a Recipe-Generator App built with React and Firebase. It allows users to generate random recipes, save them to their account, and view their saved recipes. The recipe generation is powered by OpenAI's text generation model. It can take up to 15 seconds for recipes to generate.

## Features

- **Generate Random Recipes:** Users can generate random recipes based on the selected type (breakfast, lunch, dinner, dessert).
- **Save Recipes:** Users can save recipes to their account for future reference.
- **View Saved Recipes:** Users can view a list of their saved recipes.
- **Delete Recipes:** Users can delete recipes from their saved recipes list.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Chakra UI:** A simple, modular, and accessible UI component library for React.
- **Firebase:** A cloud-based platform for building web and mobile applications.
- **Firestore:** A NoSQL document database provided by Firebase for storing and querying data.
- **Next.js:** A React framework for building server-side rendered and statically generated applications.
- **OpenAI:** An artificial intelligence research laboratory that provides powerful natural language processing models.

## Recipe Generation with OpenAI

The app uses the OpenAI GPT-3 model, specifically the `text-davinci-003` model, for generating recipes. It sends a prompt to the model in the format of "Generate a [recipe type] recipe and the name of the dish" and receives a response with a randomly generated recipe.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

Feel free to explore the codebase and make any necessary changes to enhance the functionality or user experience of the app.


