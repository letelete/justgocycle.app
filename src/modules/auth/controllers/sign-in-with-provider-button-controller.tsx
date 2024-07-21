'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';

import { logger } from '~/lib/logger';

import { SignInWithProviderButton } from '~modules/auth/views/sign-in-with-provider-button';

import { Stylable } from '~ui:styles/index';

/* -------------------------------------------------------------------------------------------------
 * SignInWithProviderButtonController
 * -----------------------------------------------------------------------------------------------*/

interface SignInWithProviderButtonControllerProps extends Stylable {
  provider: ClientSafeProvider;
}

const SignInWithProviderButtonController = ({
  provider,
  className,
}: SignInWithProviderButtonControllerProps) => {
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [isPending, setIsPending] = React.useState(false);

  const handleClick = React.useCallback(async () => {
    try {
      setIsPending(true);
      await signIn(provider.id);
    } catch (e) {
      const error = e as Error;
      setErrorMessage(error.message);
      logger.error(SignInWithProviderButtonController.displayName, error);
    } finally {
      setIsPending(false);
    }
  }, [provider.id]);

  return (
    <SignInWithProviderButton
      className={className}
      providerName={provider.name}
      errorMessage={errorMessage ?? undefined}
      isPending={isPending}
      onClick={handleClick}
    />
  );
};

SignInWithProviderButtonController.displayName =
  'SignInWithProviderButtonController';

/* -----------------------------------------------------------------------------------------------*/

export { SignInWithProviderButtonController };
export type { SignInWithProviderButtonControllerProps };
