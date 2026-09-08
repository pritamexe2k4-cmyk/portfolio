import { createRootRoute, Outlet } from "@tanstack/react-router";
import { NotFound } from "@/components/site/not-found";

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  return <Outlet />;
}
