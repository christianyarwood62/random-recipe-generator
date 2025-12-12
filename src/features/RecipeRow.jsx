import NoImage from "../ui/NoImage";
import Spinner from "../ui/Spinner";
import styles from "./RecipeRow.module.css";
import { useDeleteRecipe } from "./useDeleteRecipe";

function RecipeRow({ recipe }) {
  const { deleteRecipe, isDeleting } = useDeleteRecipe();

  // Matches the id of the row and deletes the corresponding table row in supabase matching that id
  function handleDeleteRecipe(id) {
    deleteRecipe(id);
  }

  return (
    <>
      {isDeleting ? (
        <Spinner />
      ) : (
        <li key={recipe.id} className={styles.recipeListItem}>
          {recipe.image_url ? (
            <img className={styles.recipeImage} src={recipe.image_url} />
          ) : (
            <NoImage />
          )}
          <h2 className={styles.recipeTitle}>Meal: {recipe.title}</h2>
          <p className={styles.recipeCategory}>Category: {recipe.category}</p>
          <p className={styles.recipeInstructions}>
            Instructions: {recipe.steps}
          </p>

          <button
            onClick={() => handleDeleteRecipe(recipe.id)}
            className={`accent-button ${styles.deleteBtn}`}
          >
            <span className={styles.bigButton}>Delete</span>
            <span className={styles.smallButton}>X</span>
          </button>
        </li>
      )}
    </>
  );
}

export default RecipeRow;
