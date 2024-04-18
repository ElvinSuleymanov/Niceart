import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles, Styles } from 'react-jss';

const styles:Styles = {
    btn: {
        borderRadius:rem(8),
    },
    primary: {
        backgroundColor:colors.greenMain,
        color:colors.white,
        
    }
};

export const useButtonStyles = createUseStyles(styles);