import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRecipe as deleteRecipeApi } from "../services/recipesApi";
import { toast } from "react-toastify";

// Accept a callback to close the form after the queries have been invalidated
export function useDeleteRecipe(id) {
  const queryClient = useQueryClient();

  const { mutate: deleteRecipe, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteRecipeApi(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["recipes"] });
      toast("Recipe successfully deleted");
    },
    onError: (error, onMutateResult) => {
      console.log(id);
      // An error happened!
      console.log(error.message);
      console.log(
        `rolling back optimistic update with id ${onMutateResult.id}`
      );
    },
  });

  return { deleteRecipe, isDeleting };
}
