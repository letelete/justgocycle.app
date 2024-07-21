import { Loader, LucideProps } from 'lucide-react';

import { cn } from '~ui:styles/index';

/* -------------------------------------------------------------------------------------------------
 * Icon
 * -----------------------------------------------------------------------------------------------*/

interface IconProps extends LucideProps {
  name: IconName;
}

type IconName = Parameters<(typeof icons)['get']>[0];

const Icon = ({ size = 16, name, className, ...props }: IconProps) => {
  const IconElement = icons.has(name) ? icons.get(name) : undefined;

  if (!IconElement) {
    throw new Error(`No icon with name "${name}" found`);
  }

  return (
    <IconElement
      className={cn('aspect-square', className)}
      style={{
        minWidth: size,
        maxWidth: size,
        minHeight: size,
        maxHeight: size,
      }}
      strokeWidth={1}
      size={size}
      absoluteStrokeWidth
      {...props}
    />
  );
};

/* -----------------------------------------------------------------------------------------------*/

const icons = new Map([
  ['loader', Loader],
] as const satisfies readonly (readonly [string, React.FC<LucideProps>])[]);

/* -----------------------------------------------------------------------------------------------*/

export { Icon, icons };
export type { IconProps, IconName };
