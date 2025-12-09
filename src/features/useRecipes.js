import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRecipes } from "../services/recipesApi";

function useRecipes() {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const {
    data: recipes,
    error,
    isPending,
  } = useQuery({ queryKey: ["recipes"], queryFn: getRecipes });

  return { recipes, error, isPending };
}

export default useRecipes;
