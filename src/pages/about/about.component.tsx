import React, { useMemo } from 'react';
import { Breadcrumb, Flex } from 'antd';
import useLocalization from 'assets/lang';
import { HomeIcon } from 'assets/images/icons/home';
import { Routes } from 'router/routes';
import { useAboutStyles } from './about.style';
import PurposeComponent from './components/purpose/purpose.component';
import StrategyComponent from './components/strategy/strategy.component';
import { useLeads } from 'core/common/leads/actions/leads.query';
const AboutComponent = () => {
  const translate = useLocalization();
  const classes = useAboutStyles();
  const breadCrumbItems = useMemo(() => (
    [
        {
            title:<HomeIcon/>
        },
        {
            title:translate('about'),
            path:Routes.about
        }
    ]
), [translate]);
  const {data} = useLeads();
  const aboutLeads = useMemo(() => (
    data?.find(el => el.tag === 'About')
  ), [data]);
  
  return (
    <div>
       <Breadcrumb className='py-30 pt-10' items={breadCrumbItems}/>
       <Flex gap={100} className={classes.mainTitleContainer}>
        <h1 className={classes.mainTitle} >
          Title for about us or Lorem Ipsum motto
        </h1>
        <Flex className={classes.bannerTop} gap={20} vertical>
            <h2>
              {translate('whoWeAre')}
            </h2>
            <h1>
              {aboutLeads?.heading}
            </h1>
            <p>
              {aboutLeads?.description}
            </p>
        </Flex>
       </Flex>
        <Flex className={classes.bannerImageContainer} justify='center'>
            <img src={aboutLeads?.file?.url as string} alt='test' />
        </Flex>
        <Flex justify='flex-end' >
       <Flex  className={classes.ourPurpose}>
          <Flex className={classes.ourPurposeText} gap={20} vertical>
              <h2>
                {translate('ourpurpose')}
              </h2>
              <h1>
                {translate('homeTitle')}
              </h1>
              <p>
                {translate('aboutTopText')}
              </p>
          </Flex>
          <Flex vertical className={classes.container} gap={30}>
              <PurposeComponent/>
              <Flex justify='flex-end' className='ml-3'>
                <PurposeComponent/>
              </Flex>
              <PurposeComponent/>
          </Flex>
        </Flex>
      </Flex>
      <Flex justify='flex-start'>
        <Flex className={classes.strategies} gap={20} vertical>
                <h2>
                  {translate('ourStrategy')}
                </h2>
                <h1>
                  {translate('ourStrategyText')}
                </h1>
        </Flex>
      </Flex>
      <Flex justify='flex-end' gap={30} className={classes.strategiesContainer}>
        <StrategyComponent/>
        <StrategyComponent/>
      </Flex>
    </div>
  );
};

export default AboutComponent;