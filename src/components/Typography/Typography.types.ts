export type TypographyVariants = 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4';

export interface TypographyProps {
  children?: React.ReactNode;
  variant?: TypographyVariants;
}
