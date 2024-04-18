import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles, Styles } from 'react-jss';

const styles:Styles = {
   titleSecondary: {
        color:colors.textMain,
        fontSize:rem(44),
        fontWeight:sizes.boldest,
        '@media(max-width:992px)': {
          textAlign:'center'
          }
   },
   titleMain: {
        fontSize:rem(60),
        fontWeight:sizes.boldest,
        color:colors.greenMain,
        '@media(max-width:992px)': {
          textAlign:'center'
          }
   },
   text: {
        color:colors.textMain,
        fontSize:rem(16),
        '@media(max-width:992px)': {
          textAlign:'center'
          }
   },
   banner: {
     '@media(max-width:992px)': {
          flexDirection:'column',
          alignItems:'center'
     }
   }
};
export const useProductsStyle = createUseStyles(styles);