import { RouteProps } from "react-router-dom";
import HomePage from "@pages/homepage";
import AboutUs from "@pages/aboutus";
import Service from "@pages/service";
import Blog from "@pages/blog";
import BlogInfomation from "@pages/blogs_info";

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
