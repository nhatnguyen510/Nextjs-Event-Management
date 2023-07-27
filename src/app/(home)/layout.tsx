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
      <Layout>
        {/* <Breadcrumb
          style={{ margin: "16px 0", padding: "0 48px" }}
          items={breadcrumbItems}
          itemRender={(route, params, routes, paths) => {
            console.log({ route, params, routes, paths });
            if (route.path === "/") return <Link href="/">Home</Link>;
            return <Link href={paths.join("/")}>{route.title}</Link>;
          }}
          separator=">"
        ></Breadcrumb> */}

        {children}
      </Layout>
    </NextAuthProvider>
  );
}
