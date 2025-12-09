import { useForm } from "react-hook-form";
import { addRecipe } from "../services/recipesApi";
import styles from "./NewMealForm.module.css";

function NewMealForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(recipe) {
    addRecipe(recipe);
  }

  function handleAddRecipe() {
    addRecipe();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <button>X</button>
      <h1>Add New Meal</h1>
      <label htmlFor="meal-title">Meal Title</label>
      <input type="text" name="meal-title" {...register("title")} />
      <label htmlFor="meal-category">Meal Category</label>
      <input type="text" name="meal-category" {...register("category")} />
      <label htmlFor="meal-instructions">Meal Instructions</label>
      <input
        type="text"
        name="meal-instructions"
        {...register("instructions")}
      />
      <label htmlFor="meal-image">
        Meal Photo (optional - we'll find one for you!)
      </label>
      <input type="file" name="meal-image" {...register("image")} />
      <button type="submit">Add Meal</button>
      <button>Cancel</button>
    </form>
  );
}

export default NewMealForm;
