import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';

import { SpokeSpinningLoader } from '~ui:components/atoms/loader';
import { Transition } from '~ui:components/atoms/transition';
import { cn, tw } from '~ui:styles/index';

/* -------------------------------------------------------------------------------------------------
 * SignInWithProviderButton
 * -----------------------------------------------------------------------------------------------*/

interface SignInWithProviderButtonProps extends HTMLMotionProps<'button'> {
  providerName: string;
  isPending?: boolean;
  errorMessage?: string;
}

const SignInWithProviderButton = ({
  providerName,
  isPending,
  errorMessage,
  className,
  children,
  ...rest
}: SignInWithProviderButtonProps) => {
  return (
    <>
      <motion.button
        className={cn(
          'flex w-full items-center justify-center gap-x-2 rounded-md border px-4 py-2',
          className
        )}
        aria-disabled={isPending}
        disabled={isPending}
        layout
        {...rest}
      >
        <AnimatePresence mode='popLayout'>
          {isPending ? (
            <Transition enterExit='fade'>
              <SpokeSpinningLoader
                layout
                color={tw.theme.colors.body.foreground.secondary}
                size='sm'
              />
            </Transition>
          ) : null}
        </AnimatePresence>

        <motion.p layout className='text-body-foreground-primary'>
          Continue with {providerName}
        </motion.p>
      </motion.button>

      <div className='flex w-full' aria-live='polite' aria-atomic='true'>
        {errorMessage ? (
          <p className='text-body-foreground-destructive'>{errorMessage}</p>
        ) : null}
      </div>
    </>
  );
};

SignInWithProviderButton.displayName = 'SignInWithProviderButton';

/* -----------------------------------------------------------------------------------------------*/

export { SignInWithProviderButton };
export type { SignInWithProviderButtonProps };
