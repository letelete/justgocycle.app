'use client';

import React from 'react';

import { SignInWithProviderButtonProps } from '~modules/auth/views/sign-in-with-provider-button';
import { ChildrenWithProps } from '~utils/types';

import { cn, Stylable } from '~ui:styles/index';

/* -------------------------------------------------------------------------------------------------
 * AuthPage
 * -----------------------------------------------------------------------------------------------*/

interface AuthPageProps extends Stylable {
  isPending?: boolean;
  errorMessage?: string;
  children?: ChildrenWithProps<SignInWithProviderButtonProps>;
  onSignIn?: (provider: string) => void;
}

const AuthPage = ({ className, children }: AuthPageProps) => {
  const hasProviders = React.Children.count(children);

  return (
    <main
      className={cn(
        'layout-base flex min-h-screen flex-col justify-center text-center',
        className
      )}
    >
      <div className='flex flex-col'>
        <h1 className='text-4xl font-bold'>JustGoCycle</h1>
        <p className='mt-2 text-lg'>
          Stop wasting time planning your next trip. Just go cycle.
        </p>

        {hasProviders ? (
          <div className='mx-auto mt-24 flex w-64 flex-col gap-y-3'>
            {children}
          </div>
        ) : (
          <div className='mt-24 flex w-full flex-col gap-y-2'>
            <p className='text-body-foreground-destructive'>
              Sorry, you cannot login at this moment.
            </p>
            <p className='text-body-foreground-primary text-sm'>
              See this error?{' '}
              <a
                className='text-body-foreground-secondary underline'
                href='https://github.com/letelete/justgocycle.app/issues'
              >
                Report it
              </a>
              , or contact me at{' '}
              <a
                className='text-body-foreground-primary underline'
                href='mailto:brunokawka@gmail.com'
              >
                brunokawka@gmail.com
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

AuthPage.displayName = 'AuthPage';

/* -----------------------------------------------------------------------------------------------*/

export { AuthPage };
export type { AuthPageProps };
