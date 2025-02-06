"use client";

import { type ReactElement, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({
  children
}: {
  children: React.ReactNode;
}): ReactElement {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
