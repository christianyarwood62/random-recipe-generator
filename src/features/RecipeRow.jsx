import { deleteRecipe } from "../services/recipesApi";
import styles from "./RecipeRow.module.css";

function RecipeRow({ recipe }) {
  function handleDeleteRecipe(id) {
    deleteRecipe(id);
    console.log(id);
  }

  return (
    <li key={recipe.id} className={styles.recipeListItem}>
      <img className={styles.recipeImage} src={recipe.image_url} />
      <h2>{recipe.title}</h2>
      <p>{recipe.category}</p>
      <p>{recipe.steps}</p>

      <button
        onClick={() => handleDeleteRecipe(recipe.id)}
        className="accent-button"
      >
        Delete
      </button>
    </li>
  );
}

export default RecipeRow;
