import { Link } from 'react-router-dom';
import { useProductCardStyles } from './product-card.style';
import { ProductCardProps } from './product-card.types';
import { Routes } from 'router/routes';
import ButtonComponent from '../../../../core/shared/button/button.component';
import useLocalization from 'assets/lang';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const classes = useProductCardStyles();
  const translate = useLocalization();

  return (
    <div className={`${classes.card}`}>
      <div className={`${classes.cardBody}`}>
        <p className={classes.cardTitle}>{product.about.title}</p>
        <p className={classes.cardDesc}>{product.about.description}</p>
        <div className={classes.cardDatas}>
          <div className={classes.cardData}>
            <p>{translate('duration_month')}</p>
            <p>{product.features.period}</p>
          </div>
          <div className={classes.cardData}>
            <p>{translate('price')}</p>
            <p>{product.features.amount}</p>
          </div>
          <div className={classes.cardData}>
            <p>{translate('interest_rate')}</p>
            <p>{product.features.comission}</p>
          </div>
        </div>
        <Link to={`${Routes.productDetail}/${product.about.id}`}>
          <ButtonComponent
            arrow={'right'}
            type={'primary'}
            className={classes.cardButton}
          >
            Apply loan
          </ButtonComponent>
        </Link>
      </div>
      <div className={`${classes.cardImageZone}`}>
        <div className={classes.cardImage}>
          <img src={product.file.url} alt={product.about.title} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
