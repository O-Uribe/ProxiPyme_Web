import { Router } from "express";

import {
    login,
    loginPyme,
    register,
    registerPyme,
    logout,
    profile,
    profilePyme,
} from "../controllers/auth.controller.js";
import {
    loginSchema,
    loginSchemaPyme,
    registerSchema,
    registerSchemaPyme,
} from "../schemas/auth.schemas.js";

import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateMiddleware.js";

const router = Router();

// REGISTER
router.post("/register", validateSchema(registerSchema), register);
router.post("/registerPyme", validateSchema(registerSchemaPyme), registerPyme);

// LOGIN
router.post("/login", validateSchema(loginSchema), login);
router.post("/loginPyme", validateSchema(loginSchemaPyme), loginPyme);

router.post("/logout", logout);

router.get("/profile/:id", profile);
router.get("/profilePyme/:id", profilePyme);

export default router;
