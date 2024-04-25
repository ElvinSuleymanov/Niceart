import classNames from 'classnames';
import useLocalization from 'assets/lang';
import { useMemo } from 'react';
import { Col, Flex, Row, Typography } from 'antd';
import { Logo } from 'assets/images/icons/logo';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'assets/images/icons/socials';
import {
  EnvelopeIcon,
  LocationIcon,
  PhoneIcon,
} from 'assets/images/icons/envelope';
import { useFooterStyles } from './footer.style';
import { environment } from 'core/configs/app.config';
import { Link } from 'react-router-dom';
import { Routes } from 'router/routes';
import { useContact } from 'core/common/contact/contact.query';

const FooterComponent = () => {
  const classes = useFooterStyles();
  const projectName = environment.applicationName;
  const date = new Date().getFullYear();
  const translate = useLocalization();

  const footerClasses = useMemo(
    () =>
      classNames({
        [classes.footer]: true,
        'pt-50': true,
      }),
    [classes.footer]
  );

  const footerBottomClasses = useMemo(
    () => (
      classNames(
        {
          'container py-60':true,
          [classes.footerBottom]:true
        }
      )
    ), [classes.footerBottom]
  );

  const {data:contacts} = useContact();

  return (
    <div className={classes.footerContainer}>
      <footer className={footerClasses}>
        <Row className={classes.footerSm} >
          <Col lg={6} md={24} xs={24} className='my-30' >
            <Flex vertical gap={20} >
              <Link to={Routes.home}>
                <Logo />
              </Link>
              <p>{translate('footerText')}</p>
              <Flex gap={15} align='center'>
                <Link to={'https://www.facebook.com/'}>
                  <FacebookIcon />
                </Link>
                <Link to={'https://twitter.com/'}>
                  <TwitterIcon />
                </Link>
                <Link to={'https://www.instagram.com/'}>
                  <InstagramIcon />
                </Link>
                <Link to={'https://az.linkedin.com/'}>
                  <LinkedinIcon />
                </Link>
                <Link to={'https://youtube.com/'}>
                  <YoutubeIcon />
                </Link>
              </Flex>
            </Flex>
          </Col>

          <Col lg={6} md={0} ></Col>

          <Col lg={6} md={12} >
            <Flex vertical gap={15} align='center'>
              <Typography.Title level={5}>{translate('site')}</Typography.Title>
              <Link to={Routes.home} className={classes.footerLink}>
                {translate('homepage')}
              </Link>
              <Link to={Routes.about} className={classes.footerLink}>
                {translate('aboutUs')}
              </Link>
              <Link to={Routes.products} className={classes.footerLink}>
                {translate('products')}
              </Link>
              <Link to={Routes.partners} className={classes.footerLink}>
                {translate('partners')}
              </Link>
              <Link to={Routes.contact} className={classes.footerLink}>
                {translate('contact')}
              </Link>
            </Flex>
          </Col>

          <Col lg={6} md={12}>
            <Flex vertical gap={15}>
              <Typography.Title level={5}>
                {translate('contactsUs')}
              </Typography.Title>
              <Flex gap={10} style={{ cursor: 'pointer' }}>
                <EnvelopeIcon />
                {contacts?.record.email}
              </Flex>
              <Flex gap={10} style={{ cursor: 'pointer' }}>
                <PhoneIcon />
                {contacts?.record.phone}
              </Flex>
              <Flex gap={10} style={{ cursor: 'pointer' }}>
                <LocationIcon />
                {contacts?.record.location}
              </Flex>
            </Flex>
          </Col>
        </Row>
        <div>
          <Row className={footerBottomClasses}>
            <Col lg={12}>
              <Typography.Title level={5}>
                Copyright Ⓒ {date} {projectName}
              </Typography.Title>
            </Col>
            <Col lg={12}>
              <Flex gap={15}>
                <Typography>All Rights Reserved</Typography>
                <Typography className={classes.footerCopy}>
                  Terms and Conditions
                </Typography>
                <Typography className={classes.footerCopy}>
                  Privacy Policy
                </Typography>
              </Flex>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
