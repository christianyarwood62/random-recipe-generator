import RecipeRow from "../features/RecipeRow";
import useRecipes from "../features/useRecipes";
import Spinner from "../ui/Spinner";
import styles from "./RecipeList.module.css";

import { LuChefHat } from "react-icons/lu";
import { useModalContext } from "../context/ModalContext";
import Modal from "../ui/Modal";
import NewMealForm from "../features/NewMealForm";

function RecipeList() {
  // Access the recipes from react query
  const { recipes, isPending } = useRecipes();

  console.log(recipes);
  // Access the ModalContext state
  const { formOpen, setFormOpen } = useModalContext();
  return (
    <section className={styles.recipeListSection}>
      <h1 className={styles.recipeListHeader}>📖 All Recipes</h1>
      {isPending ? (
        <Spinner />
      ) : (
        <ul className={styles.recipeList}>
          {recipes.recipes.length !== 0 ? (
            recipes.recipes.map((recipe) => (
              <RecipeRow key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <div className={`flexVertCenter ${styles.emptyRecipesContainer}`}>
              <LuChefHat
                style={{ color: `var(--orange)` }}
                className="lightText"
                size={72}
              />
              <h3 className="lightText">Your Recipe Collection is Empty</h3>
              <p>
                Start building your personal cookbook by adding your favourite
                meals!
              </p>
              <button
                className="accent-button"
                onClick={() => setFormOpen(true)}
              >
                + Add Your First Meal
              </button>
              <Modal formOpen={formOpen} onClose={() => setFormOpen(false)}>
                <NewMealForm onClose={() => setFormOpen(false)} />
              </Modal>
              <div className="line"></div>
            </div>
          )}
        </ul>
      )}
    </section>
  );
}

export default RecipeList;
