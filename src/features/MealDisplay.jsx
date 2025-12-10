import styles from "./MealDisplay.module.css";

function MealDisplay({ randomRecipe }) {
  return (
    <div className={styles.mealContainer}>
      <h1>Tonight's Meal</h1>
      <img className={styles.recipeImage} src={randomRecipe.image_url} />
      <div className={styles.mealHeader}>
        <h2>{randomRecipe.title}</h2>
        <p>Category: {randomRecipe.category}</p>
      </div>
      <p className={styles.mealSteps}>{randomRecipe.steps}</p>
    </div>
  );
}

export default MealDisplay;
