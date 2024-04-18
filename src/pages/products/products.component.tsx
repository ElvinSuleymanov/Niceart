import { Breadcrumb, Flex } from 'antd';
import { HomeIcon } from 'assets/images/icons/home';
import useLocalization from 'assets/lang';
import React, { useMemo } from 'react';
import { Routes } from 'router/routes';
import { useProductsStyle } from './products.style';
import classNames from 'classnames';
import ProductComponent from './components/products/product.component';
import BuildersImg from '../../assets/images/statics/homeBuilders.jpg';
import { FingerPrintIcon } from 'assets/images/icons/finger-print';
const ProductsComponent = () => {
  const translate = useLocalization();
  const classes = useProductsStyle();
  const breadCrumbItems = useMemo(() => (
    [
      {
          title:<HomeIcon/>
      },
      {
          title:translate('products'),
          path:Routes.products
      }
  ]
  ), []);
  const titleClasses = useMemo(() => (
    classNames({
      [classes.titleMain]:true,
    })
  ), []);
  return (
    <div>
      <Breadcrumb  className='my-50' items={breadCrumbItems}/>
      <Flex gap={100} className={classes.banner}>
          <h1 className={classes.titleMain}>
            {translate('productsMainTitle')}
          </h1>
          <Flex vertical gap={20}>
            <h1 className={classes.titleSecondary}>{translate('productsTitle')}</h1>
            <p className={classes.text}>{translate('productsText')}</p>
          </Flex>
      </Flex>
      <Flex vertical gap={40} className='mt-70'>
        <ProductComponent image={BuildersImg} title={translate('productLoanTitle')} text={translate('productLoanText')} duration={'24-72'} priceRange={'24 000 - 72 000'} interestRateRange={'12-18'} id={'1'}/>
        <ProductComponent  title={translate('productLoanTitle')} text={translate('productLoanText')} duration={'24-72'} priceRange={'24 000 - 72 000'} interestRateRange={'12-18'} id={'2'}>
            <FingerPrintIcon size={300} />
        </ProductComponent>
        <ProductComponent  title={translate('productLoanTitle')} text={translate('productLoanText')} duration={'24-72'} priceRange={'24 000 - 72 000'} interestRateRange={'12-18'} id={'3'}>
            <FingerPrintIcon size={300}/>
        </ProductComponent>

      </Flex>
    </div>
  );
};

export default ProductsComponent;