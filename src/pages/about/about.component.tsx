import { useMemo } from 'react';
import { Breadcrumb, Col, Flex } from 'antd';
import useLocalization from 'assets/lang';
import { HomeIcon } from 'assets/images/icons/home';
import { Routes } from 'router/routes';
import { useAboutStyles } from './about.style';
import PurposeComponent from './components/purpose/purpose.component';
import StrategyComponent from './components/strategy/strategy.component';
import { useLeads } from 'pages/about/actions/about.query';
import { Link } from 'react-router-dom';
const AboutComponent = () => {
  const translate = useLocalization();
  const classes = useAboutStyles();
  const breadCrumbItems = useMemo(
    () => [
      {
        title: <HomeIcon />,
      },
      {
        title: <Link to={Routes.about}>{translate('about')}</Link>,
        path: Routes.about,
      },
    ],
    [translate]
  );
  const { data } = useLeads();
  const aboutLeads = useMemo(
    () => data?.find((el) => el.tag === 'About'),
    [data]
  );

  return (
    <div>
      <Col xs={0} sm={0} md={8} lg={6} xl={4}>
        <Breadcrumb className='py-30 pt-10' items={breadCrumbItems} />
      </Col>
      <Flex gap={10} className={classes.mainTitleContainer}>
        <h1 className={classes.mainTitle}>
          Title for about us or Lorem Ipsum motto
        </h1>
        <Flex className={classes.bannerTop} gap={20} vertical>
          <h2>{translate('who_we_are')}</h2>
          <h1>{aboutLeads?.heading}</h1>
          <p>{aboutLeads?.description}</p>
        </Flex>
      </Flex>
      <Flex className={classes.bannerImageContainer} justify='center'>
        <img src={aboutLeads?.file?.url as string} alt='test' />
      </Flex>
      <Flex justify='flex-end'>
        <Flex className={classes.ourPurpose}>
          <Flex className={classes.ourPurposeText} gap={10} vertical justify='flex-end'>
            <h2>{translate('ourpurpose')}</h2>
            <h1>{translate('home_title')}</h1>
            <p>{translate('about_top_text')}</p>
          </Flex>
          <Flex vertical className={classes.container} gap={30}>
            <PurposeComponent />
            <Flex justify='flex-end' className='ml-30'>
              <PurposeComponent />
            </Flex>
            <PurposeComponent />
          </Flex>
        </Flex>
      </Flex>
      <Flex justify='flex-start'>
        <Flex className={classes.strategies} gap={20} vertical>
          <h2>{translate('our_strategy')}</h2>
          <h1>{translate('our_strategy_text')}</h1>
        </Flex>
      </Flex>
      <Flex justify='flex-end' gap={30} className={classes.strategiesContainer}>
        <StrategyComponent />
        <StrategyComponent />
      </Flex>
    </div>
  );
};

export default AboutComponent;
