import {
  Breadcrumb,
  Card,
  Checkbox,
  Col,
  Flex,
  Input,
  Slider,
  Typography,
} from 'antd';
import { HomeIcon } from 'assets/images/icons/home';
import useLocalization from 'assets/lang';
import { useCallback, useMemo, useState } from 'react';
import { Routes } from 'router/routes';
import { useHomePageStyles } from './home.style';
import ButtonComponent from 'core/shared/button/button.component';
import { ArrowDown, ArrowRight } from 'assets/images/icons/arrows';
import BannerBg from '../../assets/images/statics/homebanner.jpeg';
import classNames from 'classnames';
import { useVideo } from './actions/home.query';
import { PlayButtonIcon } from 'assets/images/icons/play-button';
import { useLeads } from 'pages/about/actions/about.query';
import { Link } from 'react-router-dom';
function HomeComponent() {
  const translate = useLocalization();
  const classes = useHomePageStyles();
  const [isVideoStarted, setIsVideoStarted] = useState<boolean>(false);

  const startVideoHandler = useCallback(() => {
    setIsVideoStarted(!isVideoStarted);
  }, [isVideoStarted]);

  const breadCrumbItems = useMemo(
    () => [
      {
        title: <HomeIcon />,
      },
      {
        title: <Link to={Routes.home}>{translate('home')}</Link>,
        path: Routes.home,
      },
    ],
    [translate]
  );
  const containerClass = useMemo(
    () =>
      classNames({
        container: true,
        [classes.containerSm]: true,
      }),
    [classes.containerSm]
  );

  const [loanAmount, setLoanAmount] = useState(0);
  const [loanDuration, setLoanDuration] = useState(0);
  const [loanInterest, setInterest] = useState(0);

  const { data: video } = useVideo();
  const { data: leads } = useLeads();
  const calculatorLeads = useMemo(
    () => leads?.find((el) => el.id === 4),
    [leads]
  );

  return (
    <div className={containerClass}>
      <Col xs={0} sm={0} md={8} lg={6} xl={4}>
        <Breadcrumb items={breadCrumbItems} />
      </Col>
      <Flex gap={70} align='center' className={classes.bannerTop}>
        <p className={classes.title}>{translate('home_title')}</p>
        <Flex className={classes.text} vertical gap={24}>
          {translate('home_text')}
          <Flex gap={20}>
            <ButtonComponent type='primary' className='mr-0'>
              <Link to={Routes.products}>
                <Flex gap={10} align='center' style={{ color: 'white' }}>
                  {translate('products')} <ArrowRight className={''} />
                </Flex>
              </Link>
            </ButtonComponent>
            <ButtonComponent type='secondary'>
              <Link to={Routes.about}>
                <Flex gap={10} align='center' style={{ color: '#3E6F00' }}>
                  {translate('about_nicart')} <ArrowDown className={''} />
                </Flex>
              </Link>
            </ButtonComponent>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify='center'
        align='center'
        vertical
        gap={30}
        className={classes.banner}
      >
        <div className={classes.imageContainer}>
          {isVideoStarted && video ? (
            <video controls className={classes.video}>
              <source src={video.url} />
            </video>
          ) : (
            <img src={BannerBg} alt='' className={classes.bannerImage} />
          )}
          <span className={classes.playBtn} onClick={startVideoHandler}>
            {isVideoStarted || <PlayButtonIcon />}
          </span>
        </div>
        <p className={classes.bannerBelowText}>
          {translate('below_banner_text')}
        </p>
        <Flex className={classes.bannerAbout}>
          <Flex vertical gap={20} align='flex-start'>
            <h2>{translate('about_us')}</h2>
            <h1>{translate('banner_about_title')}</h1>
            <p>{translate('banner_about_text')}</p>
            <Link to={Routes.about}>
              <span>Learn more</span>
            </Link>
          </Flex>
          <img
            src={
              'https://s3-alpha-sig.figma.com/img/3d1c/405a/05fcb30a8b5527e34856c8ba7eeca9c7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U~huL6g53l-G808i9S7VdO8pdkDhL6ltj~oO2aqVwVofX1zYjxYC55-88f195cGEA25gCtlHhYJIPlJX0ztEFOrXpbLBt~ObzRmQlSFLgH7eFi-4qwJ11B6v-euHONiqsM1G0NKWRw3bLOgFuS6Nees6hJk~9qUBpuEO0fvMjpX2J9CZ~3JxiHBDgH7PIO1sB7WnJzJPoItxt75-UMaDn1~~X-jXOLreQgWbaV8LfGrc~t1IfD4A2xBbSmu2nFG3yvwKYQMV5bkfpCU3fK8rJSj3hH9LlRHIjtsPTxktczE7RYUhCcP8bBal6DBLo2IzvUZRbwIJTPg8u8-8E~6O9g__'
            }
            className={classes.bannerAboutImage}
            alt=''
          />
        </Flex>
      </Flex>
      <Flex className={classes.propertyLoan} gap={100} align='center'>
        <Flex vertical gap={10}>
          <span className={classes.propertyLoanTitleSecondary}>
            {translate('products')}
          </span>
          <h1 className={classes.propertyLoanTitle}>
            {translate('property_loan_title')}
          </h1>
        </Flex>
        <p>{translate('property_loan_text')}</p>
      </Flex>
      <Flex className={classes.loanCalculator} gap={40}>
        <Flex vertical gap={20} className={classes.loanCalculatorInfo}>
          <h1 className={classes.loanTitleSecondary}>{calculatorLeads?.tag}</h1>
          <h2 className={classes.loanTitle}>{calculatorLeads?.heading}</h2>
          <p className={classes.loanText}>{translate('loan_text')}</p>
        </Flex>
        <Flex vertical gap={20} className='py-20 py-lg-120'>
          <Flex className={classes.inputCredentialsContainer}>
            <Flex vertical>
              <h1>{translate('loan_amount')}</h1>
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
              <h1>{translate('loan_duration')}</h1>
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
              <h1>{translate('loan_interest')}</h1>
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
            {translate('monthly_payment')}
            <span className={classes.loanResult}>897.78 ₼</span>
          </Flex>
          <Flex gap={40} className={classes.flexColMobile}>
            <Flex gap={10} vertical className={classes.inputCredentials}>
              <Typography.Text>{translate('FIN_code')}</Typography.Text>
              <Input placeholder='ABCDEFG' />
            </Flex>
            <Flex gap={10} vertical className={classes.inputCredentials}>
              <Typography.Text>{translate('contact_number')}</Typography.Text>
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
              {translate('akb_permission')}
            </Flex>
            <ButtonComponent type='primary' className={classes.applyBtn}>
              <Flex gap={20} align='center' justify='center'>
                {translate('apply_now')} <ArrowRight className={''} />
              </Flex>
            </ButtonComponent>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default HomeComponent;
