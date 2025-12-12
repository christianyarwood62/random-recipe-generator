import RecipeRow from "../features/RecipeRow";
import useRecipes from "../features/useRecipes";
import Spinner from "../ui/Spinner";
import styles from "./RecipeList.module.css";

function RecipeList() {
  // Access the recipes from react query
  const { recipes, isPending } = useRecipes();

  return (
    <section className={styles.recipeListSection}>
      <h1 className={styles.recipeListHeader}>Recipe List</h1>
      {isPending ? (
        <Spinner />
      ) : (
        <ul className={styles.recipeList}>
          {recipes.recipes.map((recipe) => (
            <RecipeRow key={recipe.id} recipe={recipe} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default RecipeList;
