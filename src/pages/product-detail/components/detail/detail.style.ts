import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles, Styles } from 'react-jss';

const styles:Styles = {
    icon: {
        backgroundColor:colors.fadedBg,
        borderRadius:sizes.borderRadiusCircle,
        width:rem(90),
        height:rem(90),
        padding:rem(25),
        margin:'auto'
    },
    title: {
        color:colors.greenMain,
        fontWeight:sizes.boldest,
        fontSize:rem(20),
            textAlign:'center'
    }
};

export const useDetailStyles = createUseStyles(styles);