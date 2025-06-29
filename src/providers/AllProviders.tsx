import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  // tanstack query
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default AllProviders;
