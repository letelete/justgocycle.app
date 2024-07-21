import { HTMLMotionProps, motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import React, { forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { useElementGeometry } from '~ui:hooks/use-element-geometry';

import { cn } from '~ui:styles/index';

/* -------------------------------------------------------------------------------------------------
 * LoaderContainer
 * -----------------------------------------------------------------------------------------------*/

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const sizeToClass: Record<Size, string> = {
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

interface LoaderContainerProps extends HTMLMotionProps<'div'> {
  size: Size;
}

const LoaderContainer = React.forwardRef<
  React.ElementRef<'div'>,
  LoaderContainerProps
>(({ size, className, children, ...rest }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(sizeToClass[size], className)}
      aria-label='Loading...'
      role='status'
      {...rest}
    >
      {children}
    </motion.div>
  );
});

LoaderContainer.displayName = 'LoaderContainer';

/* -------------------------------------------------------------------------------------------------
 * SpokeSpinningLoader
 * -----------------------------------------------------------------------------------------------*/

interface SpokeSpinningLoaderProps extends Partial<LoaderContainerProps> {
  size?: Size;
  color?: string;
}

const SpokeSpinningLoader = forwardRef<
  React.ElementRef<typeof LoaderContainer>,
  SpokeSpinningLoaderProps
>(({ size = 'md', color = 'slate', ...rest }, ref) => {
  const [containerRef, containerGeometry] = useElementGeometry();

  return (
    <LoaderContainer size={size} ref={mergeRefs([ref, containerRef])} {...rest}>
      <Loader
        className='animate-spin'
        color={color}
        size={containerGeometry.width}
      />
    </LoaderContainer>
  );
});

SpokeSpinningLoader.displayName = 'SpokeSpinningLoader';

/* -----------------------------------------------------------------------------------------------*/

export { SpokeSpinningLoader };
export type { SpokeSpinningLoaderProps };
