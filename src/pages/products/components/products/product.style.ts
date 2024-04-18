import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles, Styles } from 'react-jss';

const styles:Styles = {
container: {
    backgroundColor:colors.fadedBg,
    padding:rem(40),
    '& .ant-flex': {
        '& img': {
            '@media(max-width:992px)': {
                maxWidth:'50%' 
            },
            '@media(max-width:700px)': {
                maxWidth:rem(200),
                height:rem(200)
            }
        }
    }
},
titleSecondary: {
    color:colors.textMain,
    fontSize:rem(44),
    fontWeight:sizes.boldest
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