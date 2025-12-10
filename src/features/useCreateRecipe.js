import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRecipe } from "../services/recipesApi";
import { toast } from "react-toastify";

// Accept a callback to close the form after the queries have been invalidated
export function useCreateRecipe(closeFormCallback) {
  const queryClient = useQueryClient();

  const { mutate: createRecipe, isPending: isCreating } = useMutation({
    mutationFn: (recipe) => addRecipe(recipe),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["recipes"] });
      toast("Recipe successfully created");
      closeFormCallback();
    },
    onError: (error, onMutateResult) => {
      // An error happened!
      console.log(error.message);
      console.log(
        `rolling back optimistic update with id ${onMutateResult.id}`
      );
    },
  });

  return { createRecipe, isCreating };
}
