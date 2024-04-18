import { HomeIcon } from 'assets/images/icons/home';
import useLocalization from 'assets/lang';
import  { useMemo } from 'react';
import { Routes } from 'router/routes';
import { usePartnersStyles } from './partners.style';
import { Breadcrumb, Col, Flex, Row } from 'antd';
import ButtonComponent from 'core/shared/button/button.component';
import { ArrowRight } from 'assets/images/icons/arrows';
import PartnerComponent from './components/partner/partner.component';

const PartnersComponent = () => {
    const translate = useLocalization();
    const classes = usePartnersStyles();
    const breadCrumbItems = useMemo(() => (
      [
          {
              title:<HomeIcon/>
          },
          {
              title:translate('partners'),
              path:Routes.partners
          }
      ]
  ), [translate]);

  return (
    <div>
        <Breadcrumb  className='my-50' items={breadCrumbItems}/>
        <Flex gap={110} className={classes.banner}>
                <h1>
                    {translate('partnersTitle')}
                </h1>
            <Flex vertical gap={25}>
                <h1>
                    {translate('partnersTitleSecondary')}
                </h1>
                <p>
                    {translate('partnersText')}
                </p>
                <ButtonComponent className={classes.partnerBtn} type='primary'>
                    <Flex gap={10} align='center'>
                        {translate('becamePartner')}
                        <ArrowRight/>
                    </Flex>
                </ButtonComponent>
            </Flex>
        </Flex>
        <Row gutter={20} className='mt-70'>
            <Col lg={6} md={12}>
             <PartnerComponent logo='https://s3-alpha-sig.figma.com/img/e688/66c4/86cb2b883c53b9fb8bd90b81cd98ea72?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-b34bH433c2tryrQgp3inoIEuVuVZCUE75GMTyPkCxGoTC0TFVxPZYv2h~NK-zUGRfwvRcrSINg80j08MJzaxVDtMFhu1wAGuLeJRljub1wZdlw9iLuSTA92IK8vMJCZagRdvYUlShj6vH-voqvw8j9fea9iHr7HTDF~FZqiWsUUEtddtSx6Qlxstuvvog1TcOrsKMU453mnlDmaIrqfs9qxs3kUQqdGXAEoPeJm~YN4cyMovbFKRYKZ8mdlCUDJgLLCx~GjG4~zllnOaxwQe-5LtzXU2sGKTMDCIQ0Y0o9iGVPD1hTa4h4JoPZxGecjtNnSbYhxrWUop-jNQEiNQ__' name='Lorem Ipsum' category='e-commerce' description={'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. '} />
            </Col>
            <Col lg={6} md={12}>
             <PartnerComponent logo='https://s3-alpha-sig.figma.com/img/b600/72ae/ef220f8d21041ed56beeaaed3d4f801f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adVv~Z75zh-YKQMxgmPxJizbarMwSGIHKqpS11woJ6VTxOlwnzW3vSTYpfcN7Se5s2Cha7DMDpPsJb~TQ5a7t617nnVRLOLd-E14wwYFPDVUQK01RixjinR~3rEEYJWjuoJ7l7-zfAQ-7fV~OeJ4Bj9~lM3dkz7dGezLSkQCsEpw-rrlRz7xxBSQaQwrzrAW22mhDQCDdb8QNV4-WaDArsi2gI4IRfRTIGpEMV6dxA8HMTL-hB6ANgG6SVNQ-4~~BKOHgWi7DEdpCDcM6zA2AEWILn5HWCBQVsUiV7q3DbMqkC8KOEbJs6bJN0u8rC2rvTPPzbms41Xwrti3UicUGA__' name='Lorem Ipsum' category='e-commerce' description={'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. '} />
            </Col>
            <Col lg={6} md={12}>
             <PartnerComponent logo='https://s3-alpha-sig.figma.com/img/702e/6991/64af5a576ae2422faf938e233e736ae9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qll0CR8qdtA5iudYMpTE9iTgQKVqGMHJgkj2i3IBD~mLODvrEjTQjO~xDDNFsmciOD242AYlIUiYrZW6BBxLFRK171jReQz19W4wilAFBkqdC86lvG1-3Uvqya26AQqYiRE9L01t4EjMkUkSJVVY5ddyVr1xLQnNlamJLN5kKmXgtdjDjGYaY53IH97x~PydFHFgpB8~o4TzhaUbPLK3aNylXJXFFEAQTJhb8ix3hMlVEew1-s82oyOdR9qxyOTT-bMeQ92k71sPr~9X3XZ8zadbPY0aNons9O3ADqqscg~0~U9jZO0XVH310pa29pDNNSlYNNreAeYYOPeoGxMDdw__' name='Lorem Ipsum' category='e-commerce' description={'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. '} />
            </Col>
            <Col lg={6} md={12}>
             <PartnerComponent logo='https://s3-alpha-sig.figma.com/img/b600/72ae/ef220f8d21041ed56beeaaed3d4f801f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adVv~Z75zh-YKQMxgmPxJizbarMwSGIHKqpS11woJ6VTxOlwnzW3vSTYpfcN7Se5s2Cha7DMDpPsJb~TQ5a7t617nnVRLOLd-E14wwYFPDVUQK01RixjinR~3rEEYJWjuoJ7l7-zfAQ-7fV~OeJ4Bj9~lM3dkz7dGezLSkQCsEpw-rrlRz7xxBSQaQwrzrAW22mhDQCDdb8QNV4-WaDArsi2gI4IRfRTIGpEMV6dxA8HMTL-hB6ANgG6SVNQ-4~~BKOHgWi7DEdpCDcM6zA2AEWILn5HWCBQVsUiV7q3DbMqkC8KOEbJs6bJN0u8rC2rvTPPzbms41Xwrti3UicUGA__' name='Lorem Ipsum' category='e-commerce' description={'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. '} />
            </Col>
        </Row>
    </div>
  );
};

export default PartnersComponent;