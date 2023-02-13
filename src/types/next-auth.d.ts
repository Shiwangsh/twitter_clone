import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      uid: string | undefined;
      image: string | undefined;
      name: string | undefined;
      username: string | undefined;
      /** The user's postal address. */
      address: string | undefined;
    };
  }
}
