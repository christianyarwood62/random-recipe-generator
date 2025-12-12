import NoImage from "../ui/NoImage";
import styles from "./MealDisplay.module.css";

function MealDisplay({ randomRecipe }) {
  return (
    <div className={styles.mealContainer}>
      <h1>Tonight's Meal</h1>
      <div className={styles.displayTop}>
        {randomRecipe.image_url ? (
          <img className={styles.recipeImage} src={randomRecipe.image_url} />
        ) : (
          <NoImage />
        )}
        <div className={styles.mealHeader}>
          <h2>{randomRecipe.title}</h2>
          <p className="lightText">Category: {randomRecipe.category}</p>
        </div>
      </div>
      <p className={styles.mealSteps}>{randomRecipe.steps}</p>
    </div>
  );
}

export default MealDisplay;
