import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles, Styles } from 'react-jss';

const styles:Styles = {
container: {
    backgroundColor:colors.fadedBg,
    padding:rem(40),
    [breakpoint(992)]:  {
       padding:rem(22)
    },
    '& .ant-flex': {
        '& img': {
        
            marginLeft:'auto'
        },
        '& > .ant-flex': {
            gap:rem(10) 
        }
    }
},
titleSecondary: {
    color:colors.textMain,
    fontSize:rem(44),
    fontWeight:sizes.boldest,
},
titleMain: {
    fontSize:rem(60),
    fontWeight:sizes.boldest,
    color:colors.greenMain
},
text: {
    color:colors.textMain,
    fontSize:rem(16)
},
titleThird: {
    color:colors.greenMain,
    fontSize:rem(24),
    fontWeight:sizes.boldest
},
applyBtn: {
    maxWidth:rem(160),
    width:sizes.full
},
link: {
    color:colors.textMain
}
};

export const useProductStyles = createUseStyles(styles);