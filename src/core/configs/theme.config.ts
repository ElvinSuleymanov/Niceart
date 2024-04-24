import {ThemeConfig} from 'antd';
import colors from 'assets/styles/abstracts/color';

export const themeConfig: ThemeConfig = {
    token: {
        controlHeight: 45,
    },
    components: {
        Button: {
            colorPrimary:colors.greenMain,
            colorPrimaryHover:colors.greenMain,
            colorPrimaryBgHover:colors.greenMain,
            colorPrimaryActive:colors.greenMain,
        },
        Slider: {
            colorPrimary:colors.greenMain,
            handleColor:colors.greenMain,
            handleActiveColor:colors.greenMain,
            dotActiveBorderColor:colors.greenMain,
            trackBg:colors.greenMain,
            trackHoverBg:colors.greenMain,
            railSize:2
        },
        Input: {
            activeShadow:'0px',
            activeBorderColor: colors.greenMain
        },
        Checkbox: {
            colorPrimary:colors.greenMain,
            colorPrimaryActive:colors.greenMain,
            colorPrimaryHover:colors.greenMain,
        },
        Modal: {
            colorPrimary:colors.greenMain,
            colorPrimaryHover:colors.greenMain,
        },
    },
};
