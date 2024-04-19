// ProductCard.tsx

import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import { useProductCardStyles } from './product-card.style';
import { ProductCardProps } from './product-card.types';
import { Routes } from 'router/routes';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const classes = useProductCardStyles();

  return (
    <div className={`${classes.card}`}>
      <div className={`${classes.cardBody}`}>
        <p className={classes.cardTitle}>{product.about.title}</p>
        <p className={classes.cardDesc}>{product.about.description}</p>
        <div className={classes.cardDatas}>
          <div className={classes.cardData}>
            <p>Müddət(Ay)</p>
            <p>{product.features.period}</p>
          </div>
          <div className={classes.cardData}>
            <p>Məbləğ(AZN)</p>
            <p>{product.features.amount}</p>
          </div>
          <div className={classes.cardData}>
            <p>Faiz Dəəcəsi(%)</p>
            <p>{product.features.comission}</p>
          </div>
        </div>
        <Link to={`${Routes.productDetail}/${product.about.id}`} >
          <Button arrow={'right'} variant={'primary'} className={classes.cardButton} >
            Apply loan
          </Button>
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
