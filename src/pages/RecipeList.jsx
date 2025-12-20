import RecipeRow from "../features/RecipeRow";
import useRecipes from "../features/useRecipes";
import Spinner from "../ui/Spinner";
import styles from "./RecipeList.module.css";

import { LuChefHat } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";
import { CiCamera } from "react-icons/ci";
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
      <Modal formOpen={formOpen} onClose={() => setFormOpen(false)}>
        <NewMealForm onClose={() => setFormOpen(false)} />
      </Modal>
      <h1 className={styles.recipeListHeader}>📖 All Recipes</h1>
      {isPending ? (
        <Spinner />
      ) : (
        <ul className={styles.recipeList}>
          {recipes.recipes.length !== 0 ? (
            <>
              {recipes.recipes.map((recipe) => (
                <RecipeRow key={recipe.id} recipe={recipe} />
              ))}
              <div>
                <button
                  className="accent-button margin-top margin-bottom"
                  onClick={() => setFormOpen(true)}
                >
                  + Add Another Meal
                </button>
              </div>
            </>
          ) : (
            <div className={`flexVertCenter ${styles.emptyRecipesContainer}`}>
              <LuChefHat
                style={{ color: `var(--orange)` }}
                className="lightText"
                size={72}
              />
              <h3 className="lightText">Your Recipe Collection is Empty</h3>
              <p className="middleMargin">
                Start building your personal cookbook by adding your favourite
                meals!
              </p>
              <button
                className="accent-button margin-top margin-bottom"
                onClick={() => setFormOpen(true)}
              >
                + Add Your First Meal
              </button>
              <div className="line"></div>
              <div>
                <h3 className={styles.tipsHeader}>💡 Quick Tips</h3>
                <div className={styles.tips}>
                  <div
                    className={`${styles.tipOutsideContainer} ${styles.tipContainer}`}
                  >
                    <IoBookOutline className={styles.iconStyle} />
                    <p className={styles.tipHeader}>Add Details</p>
                    <p>
                      Include meal name, category, and step-by-step instructions
                      for easy cooking
                    </p>
                  </div>
                  <div
                    className={`${styles.tipMiddleContainer} ${styles.tipContainer}`}
                  >
                    <CiCamera
                      style={{ color: "purple" }}
                      className={styles.iconStyle}
                    />
                    <p className={styles.tipHeader}>Custom Photos</p>
                    <p>
                      Adding a photo brings your recipe to life and helps you
                      imagine what it could look like
                    </p>
                  </div>
                  <div
                    className={`${styles.tipOutsideContainer} ${styles.tipContainer}`}
                  >
                    <LuSparkles className={styles.iconStyle} />
                    <p className={styles.tipHeader}>Random Pick</p>
                    <p className="lightText">
                      Can't decide what to cook? Let the random selector choose
                      for you
                    </p>
                  </div>
                </div>
                <p className={`${styles.suggestionText} lightText`}>
                  Try adding meals like: Spaghetti Carbonara, Chicken Stir Fry,
                  Caesar Salad, or your family favourites!
                </p>
              </div>
            </div>
          )}
        </ul>
      )}
    </section>
  );
}

export default RecipeList;
