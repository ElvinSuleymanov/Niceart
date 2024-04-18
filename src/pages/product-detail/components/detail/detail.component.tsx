import React from 'react';
import { IDetailProps } from './detail';
import { Flex } from 'antd';
import { useDetailStyles } from './detail.style';

const DetailComponent = ({title, value, icon}:IDetailProps) => {
  const classes = useDetailStyles();
  return (
    <Flex gap={56} vertical>
            <div className={classes.icon}>
              {icon}
            </div>
            <Flex vertical gap={15}> 
                <h1 className={classes.title}>{title}</h1>
                <p className='text-center'>{value}</p>
            </Flex>
    </Flex>
  );
};

export default DetailComponent;