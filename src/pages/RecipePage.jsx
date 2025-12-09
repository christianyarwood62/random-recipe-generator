import { useState } from "react";
import NewMealForm from "../features/NewMealForm";
import styles from "./RecipePage.module.css";
import MealDisplay from "../features/MealDisplay";

function RecipePage() {
  const [formOpen, setFormOpen] = useState(false);

  // When the user wants to create a new meal, this opens the form
  function handleOpenForm() {
    setFormOpen(true);
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
        <button>Pick a Random Meal</button>
        <p>Add some meals to get started!</p>
      </section>
      <section className={styles.section}>
        <MealDisplay />
      </section>
    </main>
  );
}

export default RecipePage;
