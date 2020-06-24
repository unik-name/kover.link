import asyncHandler from "express-async-handler";
import { Router } from "express";

import * as validators from "../handlers/validators";
import * as helpers from "../handlers/helpers";
import * as auth from "../handlers/auth";
import * as utils from "../utils";

export default app => {
  const router = Router();

  router.post(
    "/login",
    validators.login,
    asyncHandler(helpers.verify),
    asyncHandler(auth.local),
    asyncHandler(auth.token)
  );

  router.get("/login/oidc", asyncHandler(auth.oidc));

  router.get("/login/oidc/cb", asyncHandler(auth.oidcCallback), (req, res) => {
    const token = utils.signToken(req.user);
    app.render(req, res, "/finish-oidc-login", { token });
  });

  router.post(
    "/signup",
    validators.signup,
    asyncHandler(helpers.verify),
    asyncHandler(auth.signup)
  );

  router.post("/renew", asyncHandler(auth.jwt), asyncHandler(auth.token));

  router.post(
    "/change-password",
    asyncHandler(auth.jwt),
    validators.changePassword,
    asyncHandler(helpers.verify),
    asyncHandler(auth.changePassword)
  );

  router.post(
    "/apikey",
    asyncHandler(auth.jwt),
    asyncHandler(auth.generateApiKey)
  );

  router.post("/reset-password", asyncHandler(auth.resetPasswordRequest));

  return router;
};
