import { FC } from 'react';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useBreadcumbStyle } from './breadcumb.style';
import { BreadcumbProps } from './breadcumb';


export const Breadcumb: FC<BreadcumbProps> = ({ page, route }) => {
  const classes = useBreadcumbStyle();
  return (
    <div className={`${classes.breadcumb} d-flex justify-content-start my-30`}>
      <div>
        <Link to='/'>
          <FaHome />
        </Link>
      </div>
      <div>
        <FaChevronRight />
      </div>
      <Link to={route}> 
        {page}
      </Link>
    </div>
  );
};
