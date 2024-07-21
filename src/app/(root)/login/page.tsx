'use server';

import { getProviders } from 'next-auth/react';

import { AuthPageController } from '~modules/auth/controllers/auth-page-controller';

export default async function LoginPage() {
  const providersResponse = await getProviders();
  const providers = providersResponse ? Object.values(providersResponse) : [];

  return <AuthPageController providers={providers} />;
}
