import { useNavigate } from "react-router";

function RecipeList() {
  // Used to navigate between the pages
  const navigate = useNavigate();

  return (
    <div>
      <h1>Recipe List</h1>
      <button onClick={() => navigate("/")}>Random Recipe</button>
    </div>
  );
}

export default RecipeList;
