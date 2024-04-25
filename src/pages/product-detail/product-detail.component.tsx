import {
  Breadcrumb,
  Card,
  Checkbox,
  Col,
  Flex,
  Input,
  Row,
  Slider,
  Typography,
} from 'antd';
import { HomeIcon } from 'assets/images/icons/home';
import useLocalization from 'assets/lang';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Routes } from 'router/routes';
import { useProductDetailStyles } from './product-detail.style';
import classNames from 'classnames';
import DetailComponent from './components/detail/detail.component';
import { WalletIcon } from 'assets/images/icons/wallet';
import { InterestIcon } from 'assets/images/icons/interest';
import { CalendarIcon } from 'assets/images/icons/calendar';
import { ComissionIcon } from 'assets/images/icons/comission';
import { ArrowRight } from 'assets/images/icons/arrows';
import ButtonComponent from 'core/shared/button/button.component';
import { useProduct } from 'pages/products/actions/product.query';
import { Product } from 'pages/products/products';

const ProductDetailComponent = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data: products} = useProduct();
  const classes = useProductDetailStyles();
  const translate = useLocalization();

  const [loanAmount, setLoanAmount] = useState(0);
  const [loanDuration, setLoanDuration] = useState(0);
  const [loanInterest, setInterest] = useState(0);
  const product: Product | undefined = products?.find(
    (item: Product) => item.about.id.toString() === productId
  );
  const breadCrumbItems = useMemo(
    () => [
      {
        title: <HomeIcon />,
      },
      {
        title: product?.about.title,
        path: Routes.productDetail,
      },
    ],
    [product?.about.title]
  );

  const flexClasses = useMemo(
    () =>
      classNames({
        'mb-140': true,
        [classes.flexColMobile]: true,
      }),
    [classes.flexColMobile]
  );

  return (
    <div className={classes.container}>
      <Breadcrumb items={breadCrumbItems} className='py-30' />
      <Flex className={flexClasses} gap={40} justify='space-between'>
        <h1 className={classes.title}>
          {product?.about.title || translate('productLoanTitle')}
        </h1>
        <img src={product?.file.url} />
      </Flex>
      <Flex className={flexClasses} justify='space-between'>
        <Flex vertical gap={10}>
          <h2 className={classes.titleSm}>{translate('aboutLoan')}</h2>
          <h1 className={classes.titleSecondary}>
            {product?.about.title || translate('loanTitle')}
          </h1>
        </Flex>
        <Flex align='center'>
          <p className={classes.text}>
            {product?.about.description || translate('productDetailText')}
          </p>
        </Flex>
      </Flex>
      <Row className='mb-150'>
        <Col lg={8} md={12} xs={24}>
          <Flex justify='center' align='center'>
            <DetailComponent
              icon={<WalletIcon />}
              title={translate('loanAmount')}
              value={product?.features.amount}
            />
          </Flex>
        </Col>
        <Col lg={8} md={12} xs={24}>
          <Flex justify='center' align='center'>
            <DetailComponent
              icon={<InterestIcon />}
              title={translate('loanDuration')}
              value={product?.features.period}
            />
          </Flex>
        </Col>
        <Col lg={8} md={12} xs={24}>
          <Flex justify='center' align='center'>
            <DetailComponent
              icon={<CalendarIcon />}
              title={translate('loanInterest')}
              value={product?.features.percentage}
            />
          </Flex>
        </Col>
        <Col lg={8} md={12} xs={24} className='mt-60'>
          <Flex justify='center' align='center'>
            <DetailComponent
              icon={<ComissionIcon />}
              title={translate('loanComission')}
              value={product?.features.comission}
            />
          </Flex>
        </Col>
      </Row>

      <Flex className={classes.loanCalculator} gap={40}>
        <Flex vertical gap={20} className={classes.loanCalculatorInfo}>
          <h1 className={classes.loanTitleSecondary}>{translate('loanTitleSecondary')}</h1>
          <h2 className={classes.loanTitle}>{product?.about.title}</h2>
          <p className={classes.loanText}>
            {product?.about.description}
          </p>
        </Flex>
        <Flex vertical gap={20} className='py-20 py-lg-120'>
          <Flex className={classes.inputCredentialsContainer}>
            <Flex vertical>
              <h1>{translate('loanAmount')}</h1>
              <Card size='small'>{loanAmount}</Card>
              <Slider
                value={loanAmount}
                onChange={setLoanAmount}
                min={1}
                max={5000}
                className={classes.rangeInput}
              />
            </Flex>
            <Flex vertical>
              <h1>{translate('loanDuration')}</h1>
              <Card size='small'>{loanDuration}</Card>
              <Slider
                value={loanDuration}
                onChange={setLoanDuration}
                min={1}
                max={5000}
                className={classes.rangeInput}
              />
            </Flex>
            <Flex vertical>
              <h1>{translate('loanInterest')}</h1>
              <Card size='small'>{loanInterest}</Card>
              <Slider
                value={loanInterest}
                onChange={setInterest}
                min={1}
                max={50}
                className={classes.rangeInput}
              />
            </Flex>
          </Flex>
          <Flex vertical gap={10}>
            {translate('monthlyPayment')}
            <span className={classes.loanResult}>897.78 ₼</span>
          </Flex>
          <Flex gap={40} className={'justify-content-center flex-lg-column'}>
            <Flex gap={10} vertical className={classes.inputCredentials}>
              <Typography.Text>{translate('FINcode')}</Typography.Text>
              <Input placeholder='ABCDEFG' />
            </Flex>
            <Flex gap={10} vertical className={classes.inputCredentials}>
              <Typography.Text>{translate('contactNumber')}</Typography.Text>
              <Input placeholder='+994 00 000 00 00' />
            </Flex>
          </Flex>
          <Flex
            gap={35}
            align='center'
            justify='space-between'
            className={classes.flexColMobile}
          >
            <Flex gap={10} align='center'>
              <Checkbox />
              {translate('AKBpermission')}
            </Flex>
            <ButtonComponent type='primary' className={classes.applyBtn}>
              <Flex gap={20} align='center' justify='center'>
                {translate('applyNow')} <ArrowRight className='' />
              </Flex>
            </ButtonComponent>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default ProductDetailComponent;
