import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import connectToDatabase from "./mogodb";
import User from "./db/models/user";

declare module "next-auth" {
  interface Session {
    userId?: string;
  }
}

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

        const { password: _, ...safeUser } = exists;
        if (!passwordMatch) throw new Error("Invalid");

        return safeUser;
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(
        "user, account, profile, email, credentials: in signinn",
        user,
        account,
        profile,
        email,
        credentials
      );
      return true;
    },
    async jwt({ token, user, account }) {
      console.log("token, user, account: in cred call", token, user, account);

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
      console.log(" token in sess call: ", token);
      if (session && session.user) {
        session.userId = token.userId as string;
      }
      console.log("sessionnnn callbk", session);
      return session;
    },
  },
};
