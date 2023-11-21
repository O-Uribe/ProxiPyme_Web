import { z } from "zod";

export const registerSchema = z.object({
    primerNombre: z.string({
        required_error: "Primer nombre es requerido",
    }),
    primerApellido: z.string({
        required_error: "Primer apellido es requerido",
    }),
    Nombre_Usuario: z.string({
        required_error: "Nombre de usuario es requerido",
    }),
    Correo_Electronico: z
        .string({
            required_error: "Correo electrónico es requerido",
        })
        .email({
            message: "Correo electrónico no es válido",
        }),
    Contrase: z
        .string({
            required_error: "Contraseña es requerida",
        })
        .min(6, {
            message: "Contraseña debe tener al menos 6 caracteres",
        }),
    tipoUsuario: z.string({
        required_error: "Tipo de usuario es requerido",
    }),
});

export const registerSchemaPyme = z.object({
    tipoUsuario: z.string({
        required_error: "Tipo de usuario es requerido",
    }),
    nombrePyme: z.string({
        required_error: "Nombre de la pyme es requerido",
    }),
    direccionPyme: z.string({
        required_error: "Dirección de la pyme es requerida",
    }),
    encargadoPyme: z.string({
        required_error: "Encargado de la pyme es requerido",
    }),
    categoria: z.string({
        required_error: "Categoría de la pyme es requerida",
    }),
    descripcionPyme: z.string({
        required_error: "Descripción de la pyme es requerida",
    }),
    Contrase: z
        .string({
            required_error: "Contraseña es requerida",
        })
        .min(6, {
            message: "Contraseña debe tener al menos 6 caracteres",
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

export const loginSchemaPyme = z.object({
    nombrePyme: z.string({
        required_error: "Nombre de pyme es requerido",
    }),
    Contrase: z.string({
        required_error: "Contraseña es requerida",
    }),
});
