import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        email: z.string().min(1).email(),
        name: z.string().min(1),
        password: z.string().min(8),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { name, email, password } = input;
      try {
        const existingUser = await ctx.db.user.findUnique({
          where: { email },
        });
        if (existingUser) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Email already exists. Please use a different email.",
          });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await ctx.db.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        });

        return {
          status: "success",
          message: "User registered successfully",
          user,
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            "An error occurred during registration. Please try again later.",
        });
      }
    }),
});
