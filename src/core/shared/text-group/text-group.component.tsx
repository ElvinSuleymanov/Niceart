import { FC } from 'react';
import { useTextGroupstyle } from './text-group.style';
import { TextGroupProps } from './text-group';

const TextGroup: FC<TextGroupProps> = ({ tag, title, description }) => {
  const classes = useTextGroupstyle();
  return (
    
  );
};

export default TextGroup;
