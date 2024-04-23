export interface ButtonStylesProps {
    size: number;
  }
  export interface ButtonProps {
    className?:React.ReactNode;
    children: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
    variant: 'primary' | 'outline';
    arrow?: 'right' | 'down' | 'up';
    size?: 'meduim' | 'large' | 'small';
  }
  