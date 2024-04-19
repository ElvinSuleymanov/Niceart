import { FC } from 'react';
import { useAboutHeadingStyles } from './about-heading.style';
import { AboutHeadingProps } from './about-heading.types';
import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import { Routes } from 'router/routes';
import TextGroup from '../text-group/text-group.component';

export const AboutHeading: FC<AboutHeadingProps> = ({
  heading,
  title,
  desc,
  buttonFirst,
  buttonSecond,
  miniTitle,
}) => {
  const classes = useAboutHeadingStyles();

  return (
    <div className='row py-40'>
      <div className='col-md-6 col-sm-12 '>
        <h2 className={classes.heading}>{heading}</h2>
      </div>
      <div className='col-md-6 col-sm-12'>
        <TextGroup miniTitle={miniTitle} title={title} desc={desc} />
        <div className={classes.buttons}>
          {buttonFirst && (
            <Link to={Routes.partners}>
              <Button variant={'primary'} arrow='right' size={'small'}>
                {buttonFirst}
              </Button>
            </Link>
          )}
          {buttonSecond && (
            <Link to={Routes.about}>
              <Button variant={'outline'} arrow='down' size={'meduim'}>
                {buttonSecond}{' '}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
