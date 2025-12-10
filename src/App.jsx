import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RecipePage from "./pages/RecipePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout";
import RecipeList from "./pages/RecipeList";

// React Query
const queryClient = new QueryClient();

// Browser Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/randomRecipe",
        element: <RecipePage />,
      },
      {
        path: "/recipeList",
        element: <RecipeList />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <div style={{ fontSize: "16px" }}>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
