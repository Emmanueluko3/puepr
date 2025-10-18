"use client";

import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { ApolloProvider } from "@apollo/client/react";
import apolloClient from "@/graphql";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <ApolloProvider client={apolloClient}>
        <Toaster />
        {children}
      </ApolloProvider>
    </Suspense>
  );
}
