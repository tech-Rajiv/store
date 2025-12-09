import { Account } from "next-auth";
import { Session } from "next-auth";

import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
    userId?: string;
  }
}

export const AUTH_OPTIONS = {
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
      async authorize(credentials, req) {
        if (!credentials) return null;
        // console.log("credentials: ", credentials);
        const { email } = credentials;
        return {
          id: "01",
          name: "rajiv",
          email,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }: { token: JWT; account: Account }) {
      if (user && !account) {
        token.userId = user.id; // manual user ID
        token.loginType = "credentials"; // optional but useful
      }

      // -----------------------------------
      // Case 2: FIRST LOGIN (Google)
      // -----------------------------------
      if (account && account.type === "oauth") {
        token.userId = account.providerAccountId; // google user id
        token.access_token = account.access_token;
        token.refresh_token = account.refresh_token;
        token.expires_at = account.expires_at;
        token.loginType = "google";
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // console.log("token: ", token);
      if (session && session.user) {
        session.userId = token?.sub;
      }
      return session;
    },
  },
};
