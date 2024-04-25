import { FC } from 'react';
import { useTextGroupstyle } from './text-group.style';
import { TextGroupProps } from './text-group';

const TextGroup: FC<TextGroupProps> = ({ miniTitle, title, desc }) => {
  const classes = useTextGroupstyle();
  return (
    <div>
      <span className={classes.miniTitle}>{miniTitle}</span>
      <h5 className={classes.title}>{title}</h5>
      <p className={classes.desc}>{desc}</p>
    </div>
  );
};

export default TextGroup;
