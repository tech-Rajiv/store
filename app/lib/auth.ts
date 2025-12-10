import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import connectToDatabase from "./mogodb";
import User from "./db/models/user";

export const AUTH_OPTIONS: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        await connectToDatabase();

        if (!credentials) throw new Error("Missing Credentials");

        const { email, password } = credentials;
        console.log("email, password : ", email, password);

        const exists = await User.findOne({ email });
        if (!exists) throw new Error("UserNotFound");
        console.log("exists: ", exists);

        const passwordMatch = await bcrypt.compare(password, exists.password);
        console.log("passwordMatch: ", passwordMatch);
        const userObj = exists.toObject();

        return {
          id: userObj._id.toString(),
          email: userObj.email,
          name: userObj.name,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && !account) {
        token.userId = user.id;
        token.loginType = "credentials";
      }
      if (account && account.type === "oauth") {
        token.userId = account.providerAccountId;
        token.access_token = account.access_token;
        token.refresh_token = account.refresh_token;
        token.expires_at = account.expires_at;
        token.loginType = "google";
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
      }
      console.log("session: ", session);
      return session;
    },
  },
};
