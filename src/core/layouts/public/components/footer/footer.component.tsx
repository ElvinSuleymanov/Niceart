import {environment} from 'core/configs/app.config';
import {useFooterStyles} from './footer.style';
import classNames from 'classnames';
import useLocalization from 'assets/lang';
import { useMemo } from 'react';
import { Col, Flex, Row, Typography } from 'antd';
import { Logo } from 'assets/images/icons/logo';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'assets/images/icons/socials';
import { EnvelopeIcon, LocationIcon, PhoneIcon } from 'assets/images/icons/envelope';

const FooterComponent = () => {
    const classes = useFooterStyles();
    const projectName = environment.applicationName;
    const date = new Date().getFullYear();
    const translate = useLocalization();

   const footerClasses = useMemo(() => (
    classNames({
        [classes.footer]:true,
        'py-100':true
    })
   ), [classes.footer]);

    return (
        <div className={classes.footerContainer}>
            <footer className={footerClasses}>
                   <Row className='container'>

                        <Col lg={6} md={12} xs={24}>
                            <Flex vertical gap={20}>
                                <Logo/>
                                <p>{translate('footerText')}</p>
                                <Flex gap={15} align='center'>
                                    <FacebookIcon/>
                                    <TwitterIcon/>
                                    <InstagramIcon/>
                                    <LinkedinIcon/>
                                    <YoutubeIcon/>
                                </Flex>
                            </Flex>
                        </Col>

                        <Col lg={6} md={12} xs={24}>

                        </Col>

                        <Col lg={6} md={12} xs={24}>
                          <Flex vertical gap={15}>
                                <Typography.Title level={5}>
                                    {translate('site')}
                                </Typography.Title> 
                                <p>{translate('homepage')}</p>
                                <p>{translate('aboutUs')}</p>
                                <p>{translate('products')}</p>
                                <p>{translate('partners')}</p>
                                <p>{translate('contact')}</p>
                          </Flex>
                        </Col>

                        <Col lg={6} md={12} xs={24}>
                            <Flex vertical gap={15}>
                                <Typography.Title level={5}>
                                    {translate('contactsUs')}
                                </Typography.Title> 
                                <Flex gap={10}>
                                    <EnvelopeIcon/>
                                    contact@company.com
                                </Flex>
                                <Flex gap={10}>
                                    <PhoneIcon/>
                                    (414) 687 - 5892
                                </Flex>
                                <Flex gap={10}>
                                    <LocationIcon/>
                                    {translate('locationOfCompany')}
                                </Flex>
                          </Flex>
                        </Col>

                   </Row>
            </footer>
        </div>
    );
};

export default FooterComponent;
