import styles from "./NewMealForm.module.css";

function NewMealForm() {
  return (
    <div className={styles.form}>
      <h1>Add New Meal</h1>
      <label htmlFor="meal-name">Meal Name</label>
      <input type="text" name="meal-name" />
      <label htmlFor="meal-category">Meal Category</label>
      <input type="text" name="meal-category" />
      <label htmlFor="meal-instructions">Meal Instructions</label>
      <input type="text" name="meal-instructions" />
      <label htmlFor="meal-image">
        Meal Photo (optional - we'll find one for you!)
      </label>
      <input type="file" name="meal-image" />
    </div>
  );
}

export default NewMealForm;
