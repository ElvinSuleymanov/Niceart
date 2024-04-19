import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles, Styles } from 'react-jss';

const styles:Styles = {
title: {
    color:colors.greenMain,
    fontWeight:700,
    fontSize:rem(62),
    lineHeight:rem(95),
    width:sizes.full,
    maxWidth:rem(550),
    height:rem(200),
    '@media(max-width:992px)': {
        textAlign:'center',
        fontSize:rem(55)
    }
},
playBtn: {
position:'absolute',
left:rem(10),
bottom:rem(10),
cursor:'pointer'
},
imageContainer: {
position:'relative'
},
video: {
    maxWidth:rem(1028),
    width:sizes.full,
    margin:0 + ' auto',
},
text: {
    lineHeight:rem(22),
    marginBottom:rem(30),
    '@media(max-width:992px)': {
        flexDirection:'column',
        alignItems:'center',
        textAlign:'center'
    }
},
bannerImage: {
    width:rem(1028),
    margin:0 + ' auto',
},
containerSm: {
    maxWidth:rem(1240)
},
bannerBelowText: {
    textAlign:'center',
    maxWidth:rem(1028),
    margin:0 + ' auto',
},
banner: {
    paddingTop:rem(50),
    marginTop:rem(30),
    backgroundColor:colors.fadedBg
}, 
bannerTop: {
'@media(max-width:992px)': {
    flexDirection:'column',
    alignItems:'center'
}
},
bannerAbout: {
    marginTop:rem(65),
    maxWidth:rem(1028),
    width:sizes.full,
    margin:0 + ' auto',
    '@media(max-width:992px)': {
        display:'flex',
        flexDirection:'column'  
    },
    '& img': {
        maxWidth:rem(498),
        width:sizes.full,
        height:rem(543),
        objectFit:'cover',
        marginBottom:rem(-100)
    },
    '& h2': {
        color:colors.greenMain,
        fontSize:rem(22)
    },
    '& h1': {
        color:colors.greenMain,
        fontSize:rem(41)
    },
    '& span': {
        color:colors.greenMain,
        borderBottom:rem(2) + ' solid ' + colors.greenMain,
        paddingBottom:rem(6)
    },    
},
propertyLoan: {
    marginTop:rem(150),
    '@media(max-width:992px)': {
        flexDirection:'column',
        alignItems:'center',
        gap:rem(20)
    }
},
propertyLoanTitle: {
    color:colors.textMain,
    fontSize:rem(44),
    width:rem(300)
},
propertyLoanTitleSecondary: {
    color:colors.greenMain,
    fontSize:rem(18),
    fontWeight:700
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
loanText: {
    width:rem(414), 
    color:colors.textMain,
    '@media(max-width:768px)': {
        width:'auto'
    }
},
loanTitleSecondary: {
    color:colors.greenMain,
    fontSize:rem(18),
    fontWeight:700
},
loanTitle: {
    color:colors.textMain,
    fontSize:rem(44),
    width:rem(374),
    '@media(max-width:768px)': {
        width:'auto'
    }
},
rangeInput: {
    maxWidth:rem(226),
    width:sizes.full,
    marginTop:rem(-5),
    '@media(max-width:768px)': {
        width:'auto'
    }
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
flexColMobile: {
    '@media(max-width:992px)': {
    flexDirection:'column',
    alignItems:'center',
    gap:rem(20)
}
}
};
export const useHomePageStyles = createUseStyles(styles);