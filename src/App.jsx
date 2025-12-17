import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RecipePage from "./pages/RecipePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout";
import RecipeList from "./pages/RecipeList";
import { ModalProvider } from "./context/ModalContext";

// React Query
const queryClient = new QueryClient();

// Browser Router
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <RecipePage /> },
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
      <ModalProvider>
        <RouterProvider router={router} />
        <div style={{ fontSize: "16px" }}>
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
        <ToastContainer />
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
