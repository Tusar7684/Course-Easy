import { authMiddleware } from "@clerk/nextjs/server";
import { clerkMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes:["/test"]
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/",
    "/api/(.*)",
    "/trpc/(.*)"
  ],
};
