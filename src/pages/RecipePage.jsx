import { useState } from "react";
import NewMealForm from "../features/NewMealForm";
import styles from "./RecipePage.module.css";
import MealDisplay from "../features/MealDisplay";
import useRecipes from "../features/useRecipes";
import Spinner from "../ui/Spinner";

function RecipePage() {
  const [formOpen, setFormOpen] = useState(false);
  const [randomRecipe, setRandomRecipe] = useState(null);

  // Access the recipes from the cache
  const { recipes, error, isPending } = useRecipes();

  // When the user wants to create a new meal, this opens the form
  function handleOpenForm() {
    setFormOpen(true);
  }

  // Choose a random recipe from the cache and set it as state to conditionally render on page
  function handleChooseRandomRecipe() {
    const randomRecipe =
      recipes.recipes[Math.floor(Math.random() * recipes.recipes.length)];
    setRandomRecipe(randomRecipe);
  }

  return (
    <main className={styles.main}>
      {formOpen ? (
        <section>
          <NewMealForm onFormOpen={setFormOpen} />
        </section>
      ) : (
        ""
      )}
      <section className={styles.section}>
        <h1>Random Meal Generator</h1>
        {isPending ? (
          <Spinner />
        ) : (
          <>
            <p>
              Add your favourite meals and let fate decide what's for dinner!
            </p>
            <button disabled={formOpen} onClick={handleOpenForm}>
              + Add New Meal
            </button>
            <p>Total meals in your collection: {recipes?.recipes?.length}</p>
            <button onClick={handleChooseRandomRecipe}>
              Pick a Random Meal
            </button>
            <p>Add some meals to get started!</p>
          </>
        )}
      </section>
      <section className={styles.section}>
        {randomRecipe ? <MealDisplay randomRecipe={randomRecipe} /> : ""}
      </section>
    </main>
  );
}

export default RecipePage;
