import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RecipePage from "./pages/RecipePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RecipePage />
    </QueryClientProvider>
  );
}

export default App;
