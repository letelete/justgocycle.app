import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../../tailwind.config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tw = resolveConfig(tailwindConfig);

export interface Stylable {
  className?: string;
}
