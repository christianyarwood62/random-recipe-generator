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
  // Upload the image to supabase bucket
  uploadFile(recipe.image[0]);

  // Declare the filename as the same name when it uploaded to the bucket
  const fileName = `${Date.now()}-${recipe.image[0].name}`;

  // Get the URL of the newly added image in the supabase bucket
  const { data: imageUrl } = supabase.storage
    .from("recipe-images")
    .getPublicUrl(fileName);

  // insert the newly created recipe into supabase recipes table
  const { data, error } = await supabase
    .from("recipes")
    .insert([
      {
        title: recipe.title,
        category: recipe.category,
        steps: recipe.instructions,
        image_url: imageUrl.publicUrl,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Recipe could not be added");
  }

  console.log("Recipe successfully added to supabase table");

  return { data, error };
}

// Add image to supabase bucket
async function uploadFile(file) {
  const { data, error } = await supabase.storage
    .from("recipe-images")
    .upload(`${Date.now()}-${file.name}`, file);
  if (error) {
    console.error(error.message);
    console.log("Image failed to upload to storage");
  } else {
    console.log("Image successfuly uploaded to storage");
  }
}

// Delete a recipe from the supabase table
export async function deleteRecipe(id) {
  const { error } = await supabase.from("recipes").delete().eq("id", id);

  if (error) {
    console.error(error.message);
    throw new Error("Recipe could not be deleted");
  }

  console.log("Recipe successfully deleted from supabase table");
  return;
}
