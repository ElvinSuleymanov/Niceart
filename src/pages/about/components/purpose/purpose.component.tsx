import { Card, Flex } from 'antd';
import { FingerPrintIcon } from 'assets/images/icons/finger-print';
import useLocalization from 'assets/lang';
import React from 'react';

const PurposeComponent = () => {
  const translate = useLocalization();
  return (
    <Flex align='center' gap={20}>
            <Card bordered={false}>
                <FingerPrintIcon/>
            </Card>
            <Flex vertical gap={10}>
                <h1>{translate('purpose_title')}</h1>
                <p>{translate('purpose_text')}</p>
            </Flex>
    </Flex>
  );
};

export default PurposeComponent;