import { Flex } from 'antd';
import { ArrowRight } from 'assets/images/icons/arrows';
import useLocalization from 'assets/lang';
import ButtonComponent from 'core/shared/button/button.component';
import React from 'react';
import { useProductStyles } from './product.style';
import { IProductProps } from './product';
import { Link } from 'react-router-dom';
import { goTo, Routes } from 'router/routes';

const ProductComponent = ({interestRateRange, priceRange, duration, text, title, image, children, id}:IProductProps) => {
  const classes = useProductStyles();
  const translate = useLocalization();
  
  return (
    <Link className={classes.link} to={goTo(Routes.productDetail, id)}>
      <div className={classes.container}>
        <Flex justify='space-between'>
          <Flex vertical>
              <h1 className={classes.titleThird}>
              {translate('propertyLoanTitle')}
              </h1>
              <p>

              </p>
              <Flex justify='space-between' gap={20}>
                <Flex vertical gap={20}>
                      <h1>
                        {translate('durationMonth')}
                      </h1>
                      <p>
                        {duration}
                      </p>
                </Flex>
                <Flex vertical gap={20}>
                    <h1>
                      {translate('price')}
                    </h1>
                    <p>
                      {priceRange}
                    </p>
                </Flex>
                <Flex vertical gap={20}>
                    <h1>
                      {translate('interestRate')}
                    </h1>
                    <p>
                      {interestRateRange}
                    </p>
                </Flex>
              </Flex>
              <ButtonComponent type='primary' className={classes.applyBtn}>
                <Flex gap={15}>
                    {translate('loanTitleSecondary')}
                    <ArrowRight/>
                </Flex>
              </ButtonComponent>
          </Flex>
          {
            children
            ?
            children
            :
            <Flex className='w-100 h-100' align='center'>
              <img src={image as string}  />
            </Flex>
          }
        </Flex>
      </div>
    </Link>
  );
};

export default ProductComponent;