import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../services/recipesApi";

function useRecipes() {
  // Queries
  const {
    data: recipes,
    error,
    isPending,
  } = useQuery({ queryKey: ["recipes"], queryFn: getRecipes });

  return { recipes, error, isPending };
}

export default useRecipes;
