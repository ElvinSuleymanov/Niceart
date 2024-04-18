import React from 'react';
import {Button} from 'antd';
import classNames from 'classnames';
import {useButtonStyles} from './button.style';
import { IButtonProps } from './button';

const ButtonComponent = (props: IButtonProps)=> {
    const {type, className = ''} = props;
    const classes = useButtonStyles();
    const allClasses = classNames({
        [classes.btn]: true,
        [className]: props.className,
        [classes.primary]: type === 'primary',
    });
    
    
    return (
        <Button {...props} type='default' className={allClasses}>
            {props.children}
        </Button>
    );
};

export default ButtonComponent;
