import { useState } from "react";
import NewMealForm from "../features/NewMealForm";
import styles from "./RecipePage.module.css";
import MealDisplay from "../features/MealDisplay";
import useRecipes from "../features/useRecipes";

function RecipePage() {
  const [formOpen, setFormOpen] = useState(false);
  const [randomRecipe, setRandomRecipe] = useState(null);

  // Access the recipes from the cache
  const { recipes, error, isPending } = useRecipes();

  // When the user wants to create a new meal, this opens the form
  function handleOpenForm() {
    setFormOpen(true);
  }

  function handleChooseRandomRecipe() {
    const randomRecipe =
      recipes.recipes[Math.floor(Math.random() * recipes.recipes.length)];
    setRandomRecipe(randomRecipe);
    console.log(randomRecipe);
  }

  return (
    <main className={styles.main}>
      {formOpen ? (
        <section>
          <NewMealForm />
        </section>
      ) : (
        ""
      )}
      <section className={styles.section}>
        <h1>Random Meal Generator</h1>
        <p>Add your favourite meals and let fate decide what's for dinner!</p>
        <button disabled={formOpen} onClick={handleOpenForm}>
          + Add New Meal
        </button>
        <p>Total meals in your collection: TBD</p>
        <button onClick={handleChooseRandomRecipe}>Pick a Random Meal</button>
        <p>Add some meals to get started!</p>
      </section>
      <section className={styles.section}>
        {randomRecipe ? <MealDisplay randomRecipe={randomRecipe} /> : ""}
      </section>
    </main>
  );
}

export default RecipePage;
