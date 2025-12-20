import { useForm } from "react-hook-form";
import styles from "./NewMealForm.module.css";
import { useCreateRecipe } from "./useCreateRecipe";

import { IoCloseOutline } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";

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
      <div className={styles.formHeader}>
        <h1>Add New Meal</h1>
        <button type="button" className="close-button" onClick={onClose}>
          <IoCloseOutline />
        </button>
      </div>
      <div className="line"></div>
      <div className={styles.inputs}>
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
          className="hidden"
          disabled={isCreating}
          type="file"
          id="meal-image"
          placeholder="tedst"
          {...register("image")}
        />
        <label className={styles.inputLabel} htmlFor="meal-image">
          <LuUpload /> <span>Choose Photo</span>
        </label>
        <div className={styles.buttons}>
          <button className="accent-button" disabled={isCreating} type="submit">
            Add Meal
          </button>
          <button
            type="button"
            className="grey-button"
            onClick={onClose}
            disabled={isCreating}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewMealForm;
