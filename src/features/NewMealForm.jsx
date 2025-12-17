import { useForm } from "react-hook-form";
import styles from "./NewMealForm.module.css";
import { useCreateRecipe } from "./useCreateRecipe";

function NewMealForm({ onClose }) {
  const { isCreating, createRecipe } = useCreateRecipe();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(recipe) {
    await createRecipe(recipe);
    onClose();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <button type="button" className="accent-button" onClick={onClose}>
        X
      </button>
      <h1>Add New Meal</h1>
      <div>
        <label htmlFor="meal-title">Meal Title</label>
        <input
          className={`displayBlock ${styles.mealInput}`}
          placeholder="e.g. Spaghetti..."
          disabled={isCreating}
          type="text"
          name="meal-title"
          {...register("title")}
        />
        <label className="displayBlock" htmlFor="meal-category">
          Meal Category
        </label>
        <input
          className={`displayBlock ${styles.mealInput}`}
          placeholder="e.g. Italian..."
          disabled={isCreating}
          type="text"
          name="meal-category"
          {...register("category")}
        />
        <label className="displayBlock" htmlFor="meal-instructions">
          Meal Instructions
        </label>
        <textarea
          className={`displayBlock resize ${styles.mealInput}`}
          placeholder="e.g. 1) Prepare ingredients
     2) Boil the kettle
     3) etc..."
          disabled={isCreating}
          type="text"
          name="meal-instructions"
          {...register("instructions")}
        />
        <label className="displayBlock" htmlFor="meal-image">
          Meal Photo (optional - we'll find one for you!)
        </label>
        <input
          className="displayBlock"
          disabled={isCreating}
          type="file"
          name="meal-image"
          {...register("image")}
        />
        <button className="main-button" disabled={isCreating} type="submit">
          Add Meal
        </button>
        <button
          type="button"
          className="accent-button"
          onClick={onClose}
          disabled={isCreating}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NewMealForm;
