import supabase from "./supabase";

// Access all rows from supabase
export async function getRecipes() {
  const { data: recipes, error } = await supabase.from("recipes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Recipes could not be loaded");
  }

  console.log(recipes);
  return { recipes, error };
}

// Add a meal to supabase
export async function addRecipe(recipe) {
  const { data, error } = await supabase
    .from("recipes")
    .insert([
      {
        title: recipe.title,
        category: recipe.category,
        steps: recipe.instructions,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Recipe could not be added");
  }

  return { data, error };
}
