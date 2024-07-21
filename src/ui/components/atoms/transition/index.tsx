import { MotionProps } from 'framer-motion';
import React, { ReactElement } from 'react';

import { ChildrenWithProps, OneOf, RequireAtLeastOne } from '~utils/types';

/* -------------------------------------------------------------------------------------------------
 * Transition
 * -----------------------------------------------------------------------------------------------*/

const transitionNameToProps: Record<
  `${TransitionName}-in` | `${TransitionName}-out`,
  MotionProps
> = {
  'fade-in': {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  'fade-out': {
    exit: { opacity: 0 },
  },
};

type TransitionName = 'fade';

type TransitionProps = {
  children: ChildrenWithProps<MotionProps>;
} & OneOf<
  {
    enterExit: TransitionName;
  },
  RequireAtLeastOne<{
    enter: TransitionName;
    exit: TransitionName;
  }>
>;

const Transition = React.forwardRef<ReactElement, TransitionProps>(
  ({ children, enterExit, enter, exit }, ref) => {
    const child = React.Children.only(children);

    const enteringExitingTransitionProps = enterExit
      ? {
          ...transitionNameToProps[`${enterExit}-in`],
          ...transitionNameToProps[`${enterExit}-out`],
        }
      : null;

    const enteringTransitionProps = enter
      ? transitionNameToProps[`${enter}-in`]
      : null;

    const exitingTransitionProps = exit
      ? transitionNameToProps[`${exit}-out`]
      : null;

    return React.cloneElement(child as React.ReactElement, {
      ref,
      ...enteringExitingTransitionProps,
      ...enteringTransitionProps,
      ...exitingTransitionProps,
    });
  }
);

Transition.displayName = 'Transition';

/* -----------------------------------------------------------------------------------------------*/

export { Transition };
export type { MotionProps };
