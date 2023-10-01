export interface ButtonProps {
  text: string;
  title?: string | undefined;
  loading?: boolean;
  onClick?: () => void;
}

export interface ButtonDefaultProps {
  text: string;
  title?: string | undefined;
  loading?: boolean;
  isScale?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean
}
