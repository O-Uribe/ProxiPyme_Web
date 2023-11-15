import { z } from "zod";

export const registerSchema = z.object({
    Nombre_Usuario: z.string({
        required_error: "Username is required",
    }),
    Correo_Electronico: z
        .string({
            required_error: "Email is required",
        })
        .email({
            message: "Email is not valid",
        }),
    Contrase: z
        .string({
            required_error: "Password is required",
        })
        .min(6, {
            message: "Password must be at least 6 characters",
        }),
});

export const loginSchema = z.object({
    Correo_Electronico: z
        .string({
            required_error: "email is requerid",
        })
        .email({
            message: "invalid email",
        }),
    Contrase: z.string().min(4),
});
