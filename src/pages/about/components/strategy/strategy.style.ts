import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles, Styles } from 'react-jss';

const styles:Styles = {
    title: {
        color:colors.greenMain
    },
    container: {
        '& > p': {
            fontSize:rem(14),
            fontWeight:300
        }
    },
    imageContainer: {
        backgroundColor:colors.fadedBg + '!important',
        borderRadius:sizes.borderRadiusCircle
    }
};
export const useStrategyStyles = createUseStyles(styles);