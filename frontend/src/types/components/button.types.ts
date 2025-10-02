import type { VariantProps } from 'class-variance-authority';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<any> {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}