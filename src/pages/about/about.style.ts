import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles, Styles } from 'react-jss';

const styles:Styles = {
    mainTitle: {
        color:colors.greenMain,
        fontSize:rem(60),
        fontWeight:sizes.boldest,
        [breakpoint(992)] : {
            textAlign:'center'
        }
    },
    bannerTop: {
        '& h1': {
            fontSize:rem(44),
            fontWeight:sizes.boldest
        },
        '& h2': {
            color:colors.greenMain
        },
        '& p': {
            maxWidth:rem(600),
            width:sizes.full,
            fontWeight:sizes.regular
        }
    },
    bannerImageContainer: {
        maxWidth:rem(1020),
        width:sizes.full,
        margin:'auto',
        marginTop:rem(67),
        marginBottom:rem(90)
    },
    ourPurposeText: {
        width:sizes.full,
        maxWidth:rem(500),
        position:'absolute',
        left:rem(-230),
        top:rem(130),
        [breakpoint(992)] : {
            position:'relative',
            top:rem(0),
            left:rem(0),
            bottom:rem(0),
            right:rem(0)
        },
        '& h1': {
            fontSize:rem(44),
            fontWeight:sizes.boldest
        },
        '& h2': {
            color:colors.greenMain
        },
        '& p': {
            maxWidth:rem(600),
            width:sizes.full,
            fontWeight:sizes.regular
        },
      
    },
    container: {
        backgroundColor:colors.fadedBg,
        paddingLeft:rem(340),
        maxWidth:rem(1043),
        marginLeft:'auto',
        paddingTop:rem(60),
        paddingBottom:rem(60),
        [breakpoint(992)] : {
            paddingLeft:rem(0)
        }
    },
    ourPurpose: {
        position:'relative',
        [breakpoint(992)] : {
            flexDirection:'column'
        }
    },
    strategies: {
        marginTop:rem(100),
        width:sizes.full,
        maxWidth:rem(500),
        left:rem(-230),
        top:rem(130),
        '& h1': {
            fontSize:rem(44),
            fontWeight:sizes.boldest
        },
        '& h2': {
            color:colors.greenMain
        },
        '& p': {
            maxWidth:rem(600),
            width:sizes.full,
            fontWeight:sizes.regular
        }
    },
    strategiesContainer: {
        maxWidth:rem(740),
        marginLeft:'auto'
    },
    mainTitleContainer: {
        [breakpoint(992)] : {
            flexDirection:'column',
            alignItems:'center'
        }
    }
};

export const useAboutStyles = createUseStyles(styles);