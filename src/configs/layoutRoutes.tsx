import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const HomePage = lazy(() => import("@pages/homepage"));
const AboutUs = lazy(() => import("@pages/aboutus"));
const Service = lazy(() => import("@pages/service"));
const Blog = lazy(() => import("@pages/blog"));
const BlogInfomation = lazy(() => import("@pages/blogs_info"));

/**
 * Flat layout routes rendered by router-container.tsx.
 * Product routes with nested children are handled separately
 * in router-container.tsx so React Router receives proper JSX nesting.
 */
const layoutRouters: RouteProps[] = [
  { path: "", element: <HomePage /> },
  { path: "aboutus", element: <AboutUs /> },
  { path: "services", element: <Service /> },
  { path: "blogs", element: <Blog /> },
  { path: "blogs/:id", element: <BlogInfomation /> },
];

export default layoutRouters;
