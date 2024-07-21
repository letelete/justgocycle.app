'use client';

import { ClientSafeProvider } from 'next-auth/react';
import React from 'react';

import { SignInWithProviderButtonController } from '~modules/auth/controllers/sign-in-with-provider-button-controller';
import { AuthPage } from '~modules/auth/views/auth-page';

/* -------------------------------------------------------------------------------------------------
 * AuthPageController
 * -----------------------------------------------------------------------------------------------*/

interface AuthPageControllerProps {
  providers: ClientSafeProvider[];
}

const AuthPageController = ({ providers }: AuthPageControllerProps) => {
  return (
    <AuthPage>
      {providers.map((provider) => (
        <SignInWithProviderButtonController
          key={`provider-button:${provider.id}`}
          provider={provider}
        />
      ))}
    </AuthPage>
  );
};

AuthPageController.displayName = 'AuthPageController';

/* -----------------------------------------------------------------------------------------------*/

export { AuthPageController };
