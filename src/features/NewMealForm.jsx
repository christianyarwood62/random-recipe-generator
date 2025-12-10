import { useForm } from "react-hook-form";
import styles from "./NewMealForm.module.css";
import { useCreateRecipe } from "./useCreateRecipe";
import { uploadFile } from "../services/recipesApi";

function NewMealForm({ onFormOpen }) {
  const { isCreating, createRecipe } = useCreateRecipe(() => onFormOpen(false));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(recipe) {
    createRecipe(recipe);
    // console.log(recipe.image[0].name);
    // uploadFile(recipe.image[0]);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <button>X</button>
      <h1>Add New Meal</h1>
      <label htmlFor="meal-title">Meal Title</label>
      <input
        placeholder="e.g. Spaghetti..."
        disabled={isCreating}
        type="text"
        name="meal-title"
        {...register("title")}
      />
      <label htmlFor="meal-category">Meal Category</label>
      <input
        placeholder="e.g. Italian..."
        disabled={isCreating}
        type="text"
        name="meal-category"
        {...register("category")}
      />
      <label htmlFor="meal-instructions">Meal Instructions</label>
      <input
        placeholder="e.g. Gather ingredients..."
        disabled={isCreating}
        type="text"
        name="meal-instructions"
        {...register("instructions")}
      />
      <label htmlFor="meal-image">
        Meal Photo (optional - we'll find one for you!)
      </label>
      <input
        disabled={isCreating}
        type="file"
        name="meal-image"
        {...register("image")}
      />
      <button disabled={isCreating} type="submit">
        Add Meal
      </button>
      <button disabled={isCreating}>Cancel</button>
    </form>
  );
}

export default NewMealForm;
