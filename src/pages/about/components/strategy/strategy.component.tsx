import { Card, Flex } from 'antd';
import { FingerPrintIcon } from 'assets/images/icons/finger-print';
import useLocalization from 'assets/lang';
import { useStrategyStyles } from './strategy.style';

const StrategyComponent = () => {
    const translate = useLocalization();
    const classes = useStrategyStyles();
  return (
    <Flex vertical gap={40} align='flex-start'>
        <Card bordered={false}>
                <FingerPrintIcon/>
        </Card>
        <h1 className={classes.title}>
            {translate('title')}
        </h1>
         <p>
            {translate('strategy_text')}
        </p>   
    </Flex>
  );
};

export default StrategyComponent;