import React, { useCallback, useState } from 'react';
import { IPartnerProps } from './partner';
import { Card, Flex, Modal } from 'antd';
import { usePartnerStyles } from './partner.style';

const PartnerComponent = ({logo, name, category, description}:IPartnerProps) => {
  const classes = usePartnerStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);
  return (
    <Card className={classes.container} onClick={openModalHandler}>
        <Flex gap={20} className='mb-25' align='center' justify='flex-start'>
            <img className={classes.logo} src={logo as string}  />
            {name}
        </Flex>
        <span>
         {category}
        </span>
        <Modal cancelText='Close' cancelButtonProps={{className:classes.cancelBtn}} open={isModalOpen} >
          <Flex vertical>
      
            <Flex align='center' gap={20}>
              <img className={classes.image} src={logo as string}  />
              <Flex vertical>
                  {name}
                  <span>
                    {category}
                  </span>
              </Flex>
            </Flex>

            {description}
          </Flex>

        </Modal>
    </Card>
  );
};

export default PartnerComponent;