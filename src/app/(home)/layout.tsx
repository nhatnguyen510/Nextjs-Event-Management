"use client";

import { NextAuthProvider } from "../../../context/NextAuthProvider";
import Layout from "../components/Layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <Layout>{children}</Layout>
    </NextAuthProvider>
  );
}
