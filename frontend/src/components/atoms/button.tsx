'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonBase =
  'inline-flex items-center justify-center rounded-md shadow-md transition-all transform disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50 focus-visible:ring-2 font-medium';

const buttonVariants = cva(buttonBase, {
  variants: {
    variant: {
      primary:
        'bg-indigo-400 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-600 text-white focus-visible:ring-indigo-300',
      destructive:
        'bg-red-600 hover:bg-red-700 text-white focus-visible:ring-red-400',
      outline:
        'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-500',
      ghost:
        'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-500',
      link: 'underline text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 focus-visible:ring-indigo-300 dark:focus-visible:ring-indigo-400',
      gradient:
        'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700 text-white focus-visible:ring-purple-400',
      subtle:
        'border-b-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-400 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-400',
      iconOnly: 'flex items-center justify-center p-0',
    },
    size: {
      sm: 'px-4 py-1 text-sm',
      md: 'px-6 py-2',
      lg: 'px-8 py-3 text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

export function Button({
  className,
  variant,
  size,
  iconStart,
  iconEnd,
  children,
  ...props
}: ButtonProps) {
  let sizeClasses = buttonVariants({ variant, size });

  if (variant === 'iconOnly') {
    sizeClasses = cn(
      buttonBase,
      size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-14 h-14' : 'w-12 h-12',
    );
  }

  const isIconOnly = variant === 'iconOnly';

  return (
    <button className={cn(sizeClasses, className)} {...props}>
      {isIconOnly ? (
        iconStart
      ) : (
        <>
          {iconStart && <span className="mr-2">{iconStart}</span>}
          {children}
          {iconEnd && <span className="ml-2">{iconEnd}</span>}
        </>
      )}
    </button>
  );
}
