import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import StravaProvider from 'next-auth/providers/strava';

import {
  DEBUG_MODE,
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
} from '~config/constants';
import { db } from '~lib/db';

export const authOptions = {
  debug: DEBUG_MODE,
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    StravaProvider({
      clientId: STRAVA_CLIENT_ID,
      clientSecret: STRAVA_CLIENT_SECRET,
      token: {
        async request({ client, params, checks, provider }) {
          const { token_type, expires_at, refresh_token, access_token } =
            await client.oauthCallback(provider.callbackUrl, params, checks);
          return {
            tokens: { token_type, expires_at, refresh_token, access_token },
          };
        },
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.sub,
            name: token.name,
            email: token.email,
            image: token.picture,
          },
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      const dbUser = token.email
        ? await db.user.findFirst({
            where: {
              email: token.email,
            },
          })
        : null;

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        sub: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
} as const satisfies NextAuthOptions;
