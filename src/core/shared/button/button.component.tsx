import React from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { WiDirectionUpRight } from 'react-icons/wi';
import { useCustomButtonstyle } from './button.style';
import { ButtonProps } from './button';

const Button: React.FC<ButtonProps> = ({ icon, onClick, variant = 'primary', arrow, size = 'medium', children, className}) => {
  const classes = useCustomButtonstyle();

  let buttonSize = '150px';
  let buttonFontSize = '15px';
  
  if (size === 'medium') {
    buttonSize = '120px';
    buttonFontSize = '14px';
  } else if (size === 'small') {
    buttonSize = '80px';
    buttonFontSize = '12px';
  }

  return (
    <button
      className={`${className}  ${variant === 'primary' ? classes.primary : classes.outline} ${classes.button}` }
      onClick={onClick}
      style={{ minWidth: buttonSize, fontSize: buttonFontSize }}
    >
      <span className={classes.buttonContent}>
        {children}
        {icon}
      </span>
      {arrow === 'right' && <FaChevronRight className={classes.iconRight} />}
      {arrow === 'down' && <FaChevronDown className={classes.iconDown} />}
      {arrow === 'up' && <WiDirectionUpRight className={classes.iconUp} />}
    </button>
  );
};

export default Button;
