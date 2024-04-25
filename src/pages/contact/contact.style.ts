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
           '@media(max-width:600px)': {
                width:rem(135),
                height:rem(183)
           },
           '&:last-child': {
                position:'absolute',
                right:rem(0),
                zIndex:4,
                '@media(max-width:600px)': {
                    right:rem(80),
                    top:rem(100)
                },
                '@media(max-width:490px)': {
                    right:rem(20),
                    top:rem(100)
                },
                '@media(max-width:425px)': {
                    right:rem(20),
                    top:rem(115)
                }
           },
           '&:nth-child(3)': {
                position:'absolute',
                right:rem(40),
                bottom:rem(-50),
                zIndex:5,

                '@media(max-width:600px)': {
                    right:rem(110),
                    bottom:rem(55),
                },
                '@media(max-width:490px)': {
                    right:rem(70),
                    bottom:rem(55),
                },
                '@media(max-width:425px)': {
                    right:rem(40),
                    bottom:rem(50),
                }
           },
           '&:nth-child(2)': {
                position:'absolute',
                top:rem(-40),
                left:rem(40),
                '@media(max-width:600px)': {
                    top:rem(70),
                    left:rem(90)
                },
                '@media(max-width:425px)': {
                    top:rem(70),
                    left:rem(50)
                }
            },
            '&:first-child': {
                position:'absolute',
                bottom:rem(-10),
                zIndex:10,
                '@media(max-width:600px)': {
                    bottom:rem(100),
                    left:rem(50)
                },
                '@media(max-width:425px)': {
                    left:rem(30),
                    
                }
            }
        }
    },
    formContainer: {
        backgroundColor:colors.fadedBg,
        marginTop:rem(170),
        padding:rem(50),
        '@media(max-width:992px)': {
            flexDirection:'column',
        }
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
},
mapContainer: {
    '& .leaflet-marker-icon': {
       filter:'hue-rotate(250deg)'
    }
}
};

export const useContactStyles = createUseStyles(styles);