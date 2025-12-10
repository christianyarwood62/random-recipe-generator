import { useNavigate } from "react-router";
import useRecipes from "../features/useRecipes";
import Spinner from "../ui/Spinner";
import styles from "./RecipeList.module.css";

function RecipeList() {
  // Used to navigate between the pages
  const navigate = useNavigate();

  // Access the recipes from react query
  const { recipes, isPending, error } = useRecipes();

  return (
    <section>
      <h1>Recipe List</h1>
      <button onClick={() => navigate("/")}>Random Recipe</button>
      {isPending ? (
        <Spinner />
      ) : (
        <ul>
          {recipes.recipes.map((recipe) => (
            <li className={styles.recipeListItem}>
              <img className={styles.recipeImage} src={recipe.image_url} />
              <h2>{recipe.title}</h2>
              <p>{recipe.category}</p>
              <p>{recipe.steps}</p>

              <button>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default RecipeList;
