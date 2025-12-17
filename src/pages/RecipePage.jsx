import { useState } from "react";
import NewMealForm from "../features/NewMealForm";
import styles from "./RecipePage.module.css";
import MealDisplay from "../features/MealDisplay";
import useRecipes from "../features/useRecipes";
import Spinner from "../ui/Spinner";
import Modal from "../ui/Modal";
import { useModalContext } from "../context/ModalContext";

function RecipePage() {
  const [randomRecipe, setRandomRecipe] = useState(null);

  // Access the ModalContext state
  const { formOpen, setFormOpen } = useModalContext();

  // Access the recipes from the cache
  const { recipes, isPending } = useRecipes();

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
    <>
      <Modal formOpen={formOpen} onClose={() => setFormOpen(false)}>
        <NewMealForm onClose={() => setFormOpen(false)} />
      </Modal>
      <section className={styles.section}>
        <h1>Random Meal Generator</h1>
        {isPending ? (
          <Spinner />
        ) : (
          <>
            <p className="lightText">
              Add your favourite meals and let fate decide what's for dinner!
            </p>
            <button
              className="accent-button"
              disabled={formOpen}
              onClick={handleOpenForm}
            >
              + Add New Meal
            </button>
            <p className="lightText">
              Total meals in your collection: {recipes?.recipes?.length}
            </p>
            <button className="main-button" onClick={handleChooseRandomRecipe}>
              Pick a Random Meal
            </button>
          </>
        )}
      </section>

      <section className={`${styles.section} ${styles.mealContainer}`}>
        {randomRecipe ? (
          <MealDisplay randomRecipe={randomRecipe} />
        ) : (
          "Let fate decide your meal!"
        )}
      </section>
    </>
  );
}

export default RecipePage;
