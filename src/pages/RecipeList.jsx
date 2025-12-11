import RecipeRow from "../features/RecipeRow";
import useRecipes from "../features/useRecipes";
import Spinner from "../ui/Spinner";
import styles from "./RecipeList.module.css";

function RecipeList() {
  // Access the recipes from react query
  const { recipes, isPending, error } = useRecipes();

  return (
    <section>
      <h1>Recipe List</h1>
      {isPending ? (
        <Spinner />
      ) : (
        <ul>
          {recipes.recipes.map((recipe) => (
            <RecipeRow key={recipe.id} recipe={recipe} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default RecipeList;
