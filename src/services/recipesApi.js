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

// Add image to supabase bucket
export async function uploadFile(file) {
  console.log(file.name);
  const { data, error } = await supabase.storage
    .from("recipe-images")
    .upload(`${file.name}`, file);
  if (error) {
    console.error(error.message);
    console.log("Image failed to upload to storage");
  } else {
    console.log("Image successfuly uploaded to storage");
  }
}
