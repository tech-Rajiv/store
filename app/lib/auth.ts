import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
      async authorize(credentials, req) {
        if (!credentials) return null;
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
      if (session && session.user) {
        session.userId = token.userId as string;
      }
      return session;
    },
  },
};
