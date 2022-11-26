import { createRouter } from "../createRouter";
import { LoginSchema, RegisterSchema } from "../../schema";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { resolve } from "path";
import { TRPCError } from "@trpc/server";
import { serialize } from "cookie";
import CryptoJS from "crypto-js";
import jwt, {Secret, JwtPayload} from "jsonwebtoken";


export const userRouter = createRouter()
  .mutation("register-user", {
    input: RegisterSchema,
    async resolve({ ctx, input }) {
      console.log(input)
      const { email, username, password } = input;
      const hash = CryptoJS.AES.encrypt(
              password,
              "okay"
            ).toString()
      try {
        const user = await ctx.prisma.user.create({
          data: {
            email,
            username,
            passwordHash: hash,
          },
        });
        console.log(user)
        return user;
      } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
          if (e.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "User already exists",
            });
          }
        }
        console.log(e)
        throw new TRPCError( {
            code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    },
  })
  .mutation("login", {
    input: LoginSchema,
    async resolve({ input, ctx }) {
      // const { username, password } = input;
      try {
        const user: any = await ctx.prisma.user.findFirst({
          where: {
            OR: [
              {
                email: input.username,
              },
              { username: input.username },
            ],
          },
        });
        if (!user) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
    //note: should end here
        }

        const { passwordHash, ...rest } = user;
        const unhashedPassword = CryptoJS.AES.decrypt(
          passwordHash,
          "okay"
        ).toString(CryptoJS.enc.Utf8);
        console.log(user.passwordHash);

        if (unhashedPassword !== input.password) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Invalid details",
          });
        } else {
          const accessToken = jwt.sign(
            {
              id: user.id,
              is_admin: user.isAdmin,
            },
            "gun",
            { expiresIn: "3d" }
          );
          ctx.res.setHeader(
            "Set-Cookie",
            serialize("token", accessToken, { path: "/" })
          );
          return { ...rest, accessToken };
        }
      } 
      catch (e) {
        console.log(e)
        if (e.code === "INTERNAL_SERVER_ERROR") {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });}

      }
      // const token = await ctx.prisma.loginToken.create({
      //   data: {
      //     // redirect,
      //     user: {
      //       connect: {
      //         id: user.id,
      //       },
      //     },
      //   },
      // });
      // return user;
    },
  }).query("logout", {resolve({ ctx}) {
    return ctx.res.removeHeader("access_token")
  },
  })
  .query("me",  {async resolve({ctx}) {
   const token = ctx.req.headers.cookie?.split("=")[1];
   const decoded = await jwt.verify(token!, "gun")
   console.log(decoded)
   const user = await ctx.prisma.user.findUnique({
    where: {
      id: decoded.id
    },
   }) 
   console.log("me:" + user)

   }
  })