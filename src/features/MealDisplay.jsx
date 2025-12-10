import styles from "./MealDisplay.module.css";

function MealDisplay({ randomRecipe }) {
  return (
    <div>
      <>
        <h1>Tonight's Meal</h1>
        <img className={styles.recipeImage} src={randomRecipe.image_url} />
        <h2>{randomRecipe.title}</h2>
        <p>Category: {randomRecipe.category}</p>
        <h3>Instructions: {randomRecipe.steps}</h3>
      </>
    </div>
  );
}

export default MealDisplay;
