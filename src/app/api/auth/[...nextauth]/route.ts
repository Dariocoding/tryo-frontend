import { validPaths } from "@/utils";
import NextAuth, { AuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      //@ts-ignore
      async authorize(body) {
        if (body?.username !== "admin@gmail.com" && body?.password !== "123456") {
          throw new Error("Error al autenticarse");
        }
        return { username: "admin@gmail.com" };
      },
    }),
  ],
  pages: { signIn: validPaths.login.path, newUser: validPaths.signup.path },
};

const handler = NextAuth(nextAuthOptions);

export const getServerSessionAuth = () => getServerSession(nextAuthOptions);

export { handler as GET, handler as POST };

/* import { AuthAdapter } from "@/adapters/auth/auth.adapter";
import { AuthSignInResponse, GoogleAuthBody } from "@/adapters/auth/interfaces";
import { UserType } from "@/adapters/users/interfaces";
import { UsersAdapter } from "@/adapters/users/users.adapter";
import { ID_GOOGLE_OAUTH2, PRIVATE_KEY_GOOGLE_OAUTH2 } from "@/utils";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextRequest } from "next/dist/server/web/spec-extension/request";

const createOptions = (req: NextRequest): NextAuthOptions => ({
  providers: [
    GoogleProvider({
      clientId: ID_GOOGLE_OAUTH2,
      clientSecret: PRIVATE_KEY_GOOGLE_OAUTH2,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      async authorize(body) {
        try {
          const data = await new AuthAdapter().signin(body);
          return data;
        } catch (error) {
          console.log(error);
          throw new Error(error?.response?.data?.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },

  callbacks: {
    jwt: async (params) => {
      const { token, account, user } = params;
      const profile = params.profile as any;
      if (req.url.includes("/api/auth/session?update") && token.data) {
        try {
          const user = token.data as AuthSignInResponse;
          const newUser = await new AuthAdapter().refresh(user.access_token);
          token.data = { ...newUser };
        } catch (error) {
          console.log(error);
        }
        //@ts-ignore
      }

      if (account?.provider === "google") {
        const googleBody: GoogleAuthBody = {
          googleId: user.id,
          email: user.email,
          familyName: profile.family_name,
          givenName: profile.given_name,
          imageUrl: profile.picture,
          name: profile.name,
        };
        const data = await new AuthAdapter().googleSignIn(googleBody);
        token.data = data;
      }
      if (account?.provider === "credentials") {
        if (params.user) {
          token.data = params.user;
        }
      }

      return token;
    },
    session: async (params) => {
      const { session, token } = params;
      if (token.data) {
        session.user = token.data;
      }
      return session;
    },
  },
  session: { strategy: "jwt", maxAge: 6.048e8 },
});

export default async function apiNextAuth(req: NextRequest, res: NextRequest) {
  // @ts-ignore
  return NextAuth(req, res, createOptions(req));
}
 */
