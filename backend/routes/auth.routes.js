import { Router } from "express";
import {
    login,
    loginPyme,
    register,
    registerPyme,
    logout,
    profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateMiddleware.js";
import {
    loginSchema,
    loginSchemaPyme,
    registerSchema,
    registerSchemaPyme,
} from "../schemas/auth.schemas.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/registerPyme", validateSchema(registerSchemaPyme), registerPyme);
router.post("/login", validateSchema(loginSchema), login);
router.post("/loginPyme", validateSchema(loginSchemaPyme), loginPyme);

router.post("/logout", logout);
router.get("/profile", authRequired, profile);

export default router;
