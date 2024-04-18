import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles, Styles } from 'react-jss';

const styles:Styles = {
    partnerBtn: {
        maxWidth:rem(200),
        width:sizes.full,
        '@media(max-width:992px)': {
            margin:'auto'
        }
    },
    banner: {
        '& > h1': {
            fontSize:rem(60),
            fontWeight:sizes.boldest,
            color:colors.greenMain,
            lineHeight:rem(80),
            maxWidth:rem(400),
            width:sizes.full
        },
        '&  .ant-flex': {
            '& > h1': {
            fontSize:rem(44),
            fontWeight:sizes.boldest,
            color:colors.textMain,
            lineHeight:rem(80),
            width:sizes.full
            }
        },
        '@media(max-width:992px)': {
            flexDirection:'column',
            alignItems:'center',
            '& *': {
                textAlign:'center'
            }
        }
    }
};


export const usePartnersStyles = createUseStyles(styles);