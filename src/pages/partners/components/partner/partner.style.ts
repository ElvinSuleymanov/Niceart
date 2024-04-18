import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles, Styles } from 'react-jss';
const styles:Styles = {
    container:{
        width:sizes.full,
        '& span': {
            backgroundColor:colors.fadedBg,
            color:colors.greenMain,
            borderRadius:rem(4),
            fontSize:rem(14),
            padding:rem(4)
        }
    },
    logo: {
        borderRadius:sizes.borderRadiusCircle,
        width:rem(32),
        height:rem(32)
    },
    cancelBtn: {
        borderColor:colors.greenMain,
        borderWidth:rem(1),
        borderRadius:rem(8)
    },
    image: {
        borderRadius:sizes.borderRadiusCircle,
        width:rem(60),
        heigth:rem(60)
    }
};


export const usePartnerStyles = createUseStyles(styles);