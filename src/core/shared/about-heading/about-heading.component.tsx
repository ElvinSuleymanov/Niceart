import { FC } from 'react';
import { useAboutHeadingStyles } from './about-heading.style';
import { AboutHeadingProps } from './about-heading.types';
import { Link } from 'react-router-dom';
import { Routes } from 'router/routes';
import ButtonComponent from '../button/button.component';
export const AboutHeading: FC<AboutHeadingProps> = ({
  heading,
  title,
  description,
  buttonFirst,
  buttonSecond,
  tag,
}) => {
  const classes = useAboutHeadingStyles();
  return (
    <div className="row py-40">
      <div className="col-md-6 col-sm-12 ">
        <h2 className={classes.heading}>{heading}</h2>
      </div>
      <div className='col-md-6 col-sm-12'>
        <div>
          <span className={classes.miniTitle}>{tag}</span>
          <h5 className={classes.title}>{title}</h5>
          <p className={classes.desc}>{description}</p>
        </div>
        <div className={classes.buttons}>
          {buttonFirst && (
            <Link to={Routes.partners}>
              <ButtonComponent type={'primary'} arrow='right'>
                {buttonFirst}
              </ButtonComponent>
            </Link>
          )}
          {buttonSecond && (
            <Link to={Routes.about}>
              <ButtonComponent type={'secondary'} arrow='down' >
                {buttonSecond}
              </ButtonComponent>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
