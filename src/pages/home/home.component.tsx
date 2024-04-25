import { Breadcrumb, Button, Card, Checkbox, Flex, Input, InputNumber, Slider, Typography } from 'antd';
import { HomeIcon } from 'assets/images/icons/home';
import useLocalization from 'assets/lang';
import { useMemo, useState } from 'react';
import { Routes } from 'router/routes';
import { useHomePageStyles } from './home.style';
import ButtonComponent from 'core/shared/button/button.component';
import { ArrowDown, ArrowRight } from 'assets/images/icons/arrows';
import BannerBg from '../../assets/images/statics/homebanner.jpeg'; 
import classNames from 'classnames';
function HomeComponent() {
    const translate = useLocalization();
    const classes = useHomePageStyles();
    const breadCrumbItems = useMemo(() => (
        [
            {
                title:<HomeIcon/>
            },
            {
                title:translate('homepage'),
                path:Routes.home
            }
        ]
    ), [translate]);
    const containerClass = useMemo(() => (
        classNames({
            container:true,
            [classes.containerSm]:true
        })
    ), [classes.containerSm]);

    const [loanAmount, setLoanAmount] = useState(0);
    const [loanDuration, setLoanDuration] = useState(0);
    const [loanInterest, setInterest] = useState(0);


    return (
        <div className={containerClass}>
            <Breadcrumb items={breadCrumbItems}/>
            <Flex gap={70} align='center' className={classes.bannerTop}>
                <p className={classes.title}>
                    {translate('homeTitle')}
                </p>
                <Flex className={classes.text} vertical gap={24}>
                    {translate('homeText')}
                    <Flex gap={30}>

                    <ButtonComponent type='primary'>
                        <Flex gap={10} align='center'>
                        {translate('products')} <ArrowRight className={''}/>
                        </Flex>
                    </ButtonComponent>
                    <ButtonComponent type='secondary'>
                        <Flex gap={10} align='center'>
                            {translate('aboutNicart')} <ArrowDown className={''}/>
                        </Flex>
                    </ButtonComponent>
                    </Flex>
                </Flex>
            </Flex>
            <Flex justify='center' align='center' vertical gap={30} className={classes.banner}>
                <img src={BannerBg} alt='' className={classes.bannerImage} />
                <p className={classes.bannerBelowText}>
                    {translate('belowBannerText')}
                </p>
                <Flex className={classes.bannerAbout}>
                    <Flex vertical gap={20} align='flex-start'>
                        <h2>
                            {translate('aboutUs')}
                        </h2>
                        <h1>
                            {translate('bannerAboutTitle')}
                        </h1>
                        <p>
                            {translate('bannerAboutText')}
                        </p>
                        <span>
                            Learn more
                        </span>
                    </Flex>
                    <img src={'https://s3-alpha-sig.figma.com/img/3d1c/405a/05fcb30a8b5527e34856c8ba7eeca9c7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U~huL6g53l-G808i9S7VdO8pdkDhL6ltj~oO2aqVwVofX1zYjxYC55-88f195cGEA25gCtlHhYJIPlJX0ztEFOrXpbLBt~ObzRmQlSFLgH7eFi-4qwJ11B6v-euHONiqsM1G0NKWRw3bLOgFuS6Nees6hJk~9qUBpuEO0fvMjpX2J9CZ~3JxiHBDgH7PIO1sB7WnJzJPoItxt75-UMaDn1~~X-jXOLreQgWbaV8LfGrc~t1IfD4A2xBbSmu2nFG3yvwKYQMV5bkfpCU3fK8rJSj3hH9LlRHIjtsPTxktczE7RYUhCcP8bBal6DBLo2IzvUZRbwIJTPg8u8-8E~6O9g__'} className={classes.bannerAboutImage} alt='' />
                </Flex>
            </Flex>
            <Flex className={classes.propertyLoan} gap={100} align='center'>
                <Flex vertical gap={10} >
                    <span className={classes.propertyLoanTitleSecondary}>{translate('products')}</span>
                    <h1 className={classes.propertyLoanTitle}>{translate('propertyLoanTitle')}</h1>
                </Flex>
                    <p>{translate('propertyLoanText')}</p>
            </Flex>
            <Flex className={classes.loanCalculator} gap={40}>
                <Flex vertical gap={20} className={classes.loanCalculatorInfo}>
                    <h1 className={classes.loanTitleSecondary}>{translate('loanTitleSecondary')}</h1>
                    <h2 className={classes.loanTitle}>{translate('loanTitle')}</h2>
                    <p className={classes.loanText}>{translate('loanText')}</p>
                </Flex>
                <Flex vertical gap={20} className='py-20 py-lg-120'>
                    <Flex gap={20} className={classes.inputCredentialsContainer}>
                        <Flex vertical >
                            <h1>{translate('loanAmount')}</h1>
                            <Card size='small'>{loanAmount}</Card>
                            <Slider value={loanAmount} onChange={setLoanAmount}  min={1} max={5000} className={classes.rangeInput}/>
                        </Flex>
                        <Flex vertical >
                            <h1>{translate('loanDuration')}</h1>
                            <Card size='small'>{loanDuration}</Card>
                            <Slider value={loanDuration} onChange={setLoanDuration}  min={1} max={5000} className={classes.rangeInput}/>
                        </Flex>
                        <Flex vertical >
                            <h1>{translate('loanInterest')}</h1>
                            <Card size='small'>{loanInterest}</Card>
                            <Slider value={loanInterest} onChange={setInterest}  min={1} max={5000} className={classes.rangeInput}/>
                        </Flex>
                    </Flex>
                    <Flex vertical gap={10}>
                        {translate('monthlyPayment')}
                        <span className={classes.loanResult}>897.78 ₼</span>
                    </Flex>
                    <Flex gap={40} className={'justify-content-center flex-lg-column'}>
                        <Flex gap={10} vertical className={classes.inputCredentials}>
                            <Typography.Text>
                                {translate('FINcode')}
                            </Typography.Text>
                            <Input placeholder='ABCDEFG'  />
                        </Flex>
                        <Flex gap={10} vertical className={classes.inputCredentials}>
                           <Typography.Text>
                                {translate('contactNumber')}
                           </Typography.Text>
                           <Input  placeholder='+994 00 000 00 00'/>
                        </Flex>
                    </Flex>
                    <Flex gap={35} align='center' justify='space-between' className={classes.flexColMobile}>
                        <Flex gap={10} align='center'>
                            <Checkbox />
                            {translate('AKBpermission')}
                        </Flex>
                        <ButtonComponent type='primary' className={classes.applyBtn}>
                            <Flex gap={20} align='center' justify='center'>
                                {translate('applyNow')} <ArrowRight className={''}/>
                            </Flex>
                        </ButtonComponent>
                    </Flex>
                </Flex>
            </Flex>
            
        </div>
    );
}

export default HomeComponent;
