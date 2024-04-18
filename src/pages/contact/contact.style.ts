import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles, Styles } from 'react-jss';

const styles:Styles = {
    bannerInfo: {
        '& h1': {
            fontSize:rem(22),
            fontWeight:400
        }
    },
    title: {
        color:colors.greenMain,
        fontSize:rem(60),
        fontWeight:800
    },
    images: {
        position:'relative',
        maxWidth:rem(570),
        height:rem(500),
        width:sizes.full,
        '& img': {
           width:rem(229),
           height:rem(309),
           borderColor:colors.greenMain,
           borderWidth:rem(4),
           borderStyle:'solid',
           objectFit:'cover',
           '&:last-child': {
                position:'absolute',
                right:rem(0),
                zIndex:4
           },
           '&:nth-child(3)': {
                position:'absolute',
                right:rem(40),
                bottom:rem(-40),
                zIndex:5
           },
           '&:nth-child(2)': {
                position:'absolute',
                top:rem(0),
                left:rem(40)
            },
            '&:first-child': {
                position:'absolute',
                bottom:rem(-10),
                zIndex:10
            }
        }
    },
    formContainer: {
        backgroundColor:colors.fadedBg,
        marginTop:rem(170),
        padding:rem(50)
    },
    form: {
        width:sizes.full,
        maxWidth:rem(600)
    },
    formText: {
        maxWidth:rem(490),
        width:sizes.full,
        gap:rem(20)
    },
    flexColMobile: {'@media(max-width:992px)': {
        flexDirection:'column',
        alignItems:'center',
        gap:rem(20)
    }
}
};

export const useContactStyles = createUseStyles(styles);