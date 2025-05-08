import z from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  VITE_GEMINI_API_KEY: z.string().min(1),
  VITE_GEMINI_API_URL: z.string().url(),
});

export const env = envSchema.parse(import.meta.env);
