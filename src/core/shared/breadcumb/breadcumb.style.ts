import colors from 'assets/styles/abstracts/color';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles } from 'react-jss';

export  const useBreadcumbStyle = createUseStyles({
    breadcumb:{
        color:colors.textBlack,
        backgroundColor:'transparent',
        fontSize:sizes.base,
    }
});