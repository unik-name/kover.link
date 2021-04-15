import asyncHandler from "express-async-handler";
import { Router } from "express";

import * as auth from "../handlers/auth";
import * as utils from "../utils";

export default app => {
  const router = Router();

  router.get("/login/oidc", asyncHandler(auth.oidc));

  // Redirect User to home page if oidc authentication fails
  const onOIDCCbError = (req, res, next, err, user) => {
    if (user) {
      return next(err);
    } else {
      app.render(req, res, "/");
    }
  };

  router.get(
    "/login/oidc/cb",
    asyncHandler(auth.oidcCallback(onOIDCCbError)),
    (req, res) => {
      const token = utils.signToken(req.user);
      app.render(req, res, "/finish-oidc-login", { token });
    }
  );

  router.post("/renew", asyncHandler(auth.jwt), asyncHandler(auth.token));

  router.post(
    "/apikey",
    asyncHandler(auth.jwt),
    asyncHandler(auth.generateApiKey)
  );

  router.post("/reset-password", asyncHandler(auth.resetPasswordRequest));

  return router;
};
