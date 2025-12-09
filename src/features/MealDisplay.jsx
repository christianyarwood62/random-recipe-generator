import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRecipes } from "../services/recipesApi";
import Spinner from "../ui/Spinner";

function MealDisplay() {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const {
    data: recipes,
    error,
    isPending,
  } = useQuery({ queryKey: ["recipes"], queryFn: getRecipes });

  // Mutations
  // const mutation = useMutation({
  //   mutationFn:
  // })

  return (
    <div>
      {isPending ? (
        <Spinner />
      ) : (
        <>
          <h1>Tonight's Meal</h1>
          <h2>{recipes.recipes[0].title}</h2>
          <p>Category: {recipes.recipes[0].category}</p>
          <h3>Instructions: {recipes.recipes[0].steps}</h3>
        </>
      )}
    </div>
  );
}

export default MealDisplay;
