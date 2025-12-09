import supabase from "./supabase";

export async function getRecipes() {
  const { data: recipes, error } = await supabase.from("recipes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Recipes could not be loaded");
  }

  console.log(recipes);
  return { recipes, error };
}
