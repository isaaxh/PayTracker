import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  imgUrl: z.string(),
});

export type TProduct = z.infer<typeof ProductSchema>;

export const SectionSchema = z.object({
  id: z.number(),
  title: z.string(),
  data: z.array(ProductSchema),
});

export type TSection = z.infer<typeof SectionSchema>;

export const ResturantSchema = z.object({
  id: z.number(),
  name: z.string(),
  distance: z.number(),
  rating: z.number(),
  deliveryTime: z.string(),
  imgUrl: z.string(),
  sections: z.array(SectionSchema),
});

export type TRestaurant = z.infer<typeof ResturantSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be of minimum of 8 characters"),
});

export const signupSchema = loginSchema
  .extend({
    name: z.string().min(1, { message: "Name is required" }), // pass custom message
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TSignupSchema = z.infer<typeof signupSchema>;
export type formType = TLoginSchema | TSignupSchema;
