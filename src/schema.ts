import { type } from "os";
import { string, z } from "zod";

export const LoginSchema = z.object({
  username: string()
    .min(4, { message: "must contain at least 4 characters" })
    .max(50, { message: "must contain at most 50 characters" }),
  password: string()
    .min(4, { message: "must contain at least 4 characters" })
    .max(20, { message: "must contain at most 20 characters" }),
  // redirect: string().optional(),
});

export const RegisterSchema = z.object({
  username: z
    .string()
    .min(4, { message: "must contain at least 4 characters" })
    .max(50, { message: "must contain at most 50 characters" }),
  email: z
    .string()
    .email()
    .max(50, { message: "must contain at most 50 characters" }),
  password: z
    .string()
    .min(4, { message: "must contain at least 4 characters" })
    .max(20, { message: "must contain at most 20 characters" }),
  confirmPassword: z
    .string()
    .min(4, { message: "must contain at least 4 characters" })
    .max(20, { message: "must contain at most 20 characters" }),
});



// export const requestOtpSchema = z.object({
//   email: z.string().email(),
//   redirect: z.string().default("/"),
// });

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

// export type requestOtpInput = z.TypeOf<typeof requestOtpSchema>;

// export interface CustomRequest 