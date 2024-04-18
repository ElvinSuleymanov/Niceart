import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles, Styles } from 'react-jss';

const styles:Styles = {
    container: {
        '&:after': {
            content:'""',
            display:'block',
            position:'absolute',
            top:rem(0),
            right:rem(0),
            left:rem(0),
            height:rem(575),
            backgroundColor:colors.greenMain,
            opacity:0.09,
            width:sizes.full,
            zIndex:-2,
            '@media(max-width:992px)': {
                height:rem(870),
            }
        }
    },
    title: {
        fontSize:rem(60),
        color:colors.greenMain,
        fontWeight:sizes.boldest,
        maxWidth:rem(530),
        lineHeight:rem(80)
    },
    titleSecondary: {
        color:colors.textMain,
        fontSize:rem(44),
        fontWeight:sizes.boldest,
        maxWidth:rem(374),
        width:sizes.full,
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
        maxWidth:rem(600),
        lineHeight:rem(31),
        '@media(max-width:992px)': {
          textAlign:'center'
          }
   },
   titleSm: {
    fontSize:rem(16),
    color:colors.greenMain,
    fontWeight:sizes.boldest,
   },
   flexColMobile: {'@media(max-width:992px)': {
        flexDirection:'column',
        alignItems:'center',
        gap:rem(20)
    }
    
   },
   loanText: {
    width:rem(414), 
    color:colors.textMain
},
loanTitleSecondary: {
    color:colors.greenMain,
    fontSize:rem(18),
    fontWeight:700
},
loanTitle: {
    color:colors.textMain,
    fontSize:rem(44),
    width:rem(374)
},
rangeInput: {
    maxWidth:rem(226),
    width:sizes.full,
    marginTop:rem(-5)
},
loanResult: {
    color:colors.greenMain,
    fontSize:rem(20),
},
loanCalculatorInfo: {
    position:'absolute',
    left:'-15%',
    top:rem(100),
    '@media(max-width:992px)': {
        position:'relative',
        left:'auto',
        top:'auto',
    }
},
applyBtn: {
    width:rem(320),
},
inputCredentials: {
    maxWidth:rem(320),
    width:sizes.full
},
inputCredentialsContainer: {
    '@media(max-width:992px)': {
        flexDirection:'column'
    }
},
loanCalculator: {
    backgroundColor:colors.fadedBg,
    width:'100%',
    maxWidth:rem(1000),
    marginTop:rem(100),
    paddingLeft:'30%',
    marginLeft:'auto',
    position:'relative',
    '@media(max-width:992px)': {
        padding:rem(0),
        flexDirection:'column',
        alignItems:'center',
        paddingTop:rem(50),
    }
},
};

export const useProductDetailStyles = createUseStyles(styles);