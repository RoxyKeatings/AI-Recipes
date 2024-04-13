function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "👩‍🍳",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let recipeInputElement = document.querySelector("#recipe-input");
  let apiKey = "89b05tfca20b16d5f5e3c646e1oa37db";
  let prompt = `Create a recipe about ${recipeInputElement.value}`;
  let context =
    " You are an experienced, world renowned chef, you are well versed in all cusines and dishes and like to create recipes. Please generate a recipe from the topic of users choice, display in recipe format and state how many this recipe will feed, Do not go over 15 lines for the recipe in basic HTMl format";
  let recipeElement = document.querySelector("#recipe");
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-topic-form");
recipeFormElement.addEventListener("submit", generateRecipe);
