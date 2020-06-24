import { Router } from "express";

import domains from "./domains";
import health from "./health";
import links from "./links";
import user from "./users";
import auth from "./auth";

export default app => {
  const router = Router();

  router.use("/domains", domains);
  router.use("/health", health);
  router.use("/links", links);
  router.use("/users", user);
  router.use("/auth", auth(app));
  return router;
};
