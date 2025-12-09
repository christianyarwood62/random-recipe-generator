import { useState } from "react";
import NewMealForm from "../features/NewMealForm";
import styles from "./RecipePage.module.css";
import MealDisplay from "../features/MealDisplay";

function RecipePage() {
  const [formOpen, setFormOpen] = useState(false);

  function handleOpenForm() {
    setFormOpen(true);
  }
  return (
    <main>
      {formOpen ? (
        <section>
          <NewMealForm />
        </section>
      ) : (
        ""
      )}
      <section>
        <h1>Random Meal Generator</h1>
        <p>Add your favourite meals and let fate decide what's for dinner!</p>
        <button onClick={handleOpenForm}>+ Add New Meal</button>
        <p>Total meals in your collection: TBD</p>
        <button>Pick a Random Meal</button>
        <p>Add some meals to get started!</p>
      </section>
      <section>
        <MealDisplay />
      </section>
    </main>
  );
}

export default RecipePage;
