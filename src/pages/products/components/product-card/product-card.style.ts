import { createUseStyles } from 'react-jss';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import colors from 'assets/styles/abstracts/color';
import {rem} from 'assets/styles/abstracts/functions';


export const useProductCardStyles = createUseStyles({
  card: {
    backgroundColor:colors.footerColor,
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
    borderRadius: rem(10),
    display: 'flex',
    margin:rem(20)+' '+'auto',
    [breakpoint(767)]: {
      flexDirection: 'column',

    },
  },
  cardBody: {
    flex: '1',
    padding: rem(20),
  },
  cardTitle: {
    fontSize: rem(20),
    fontWeight: 'bold',
    marginBottom: rem(10),
    [breakpoint(767)]: {
      fontSize: rem(18),
    },
  },
  cardDesc: {
    fontSize: rem(16),
    color: colors.textBlack,
    marginBottom: rem(20),
    [breakpoint(767)]: {
      fontSize: rem(14),
    },
  },
  cardDatas: {
    display: 'flex',
    width:'80%',
    marginBottom: rem(20),
    [breakpoint(767)]: {
      flexDirection: 'column',
    },
    '& p': {
      fontSize: rem(14),
      color: colors.textBlack,
      fontWeight: '100',
      [breakpoint(767)]: {
        fontSize: rem(12),
      },
    },
  },
  cardData: {
    flex: '1',
    textAlign: 'left',
    [breakpoint(767)]: {
      width: '100%',
      textAlign: 'left',
      marginBottom: rem(10),
    },
  },
  cardButton:{
    marginTop:'10%'
  },
  cardImageZone: {
    position: 'relative',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    [breakpoint(767)]: {
       position:'relative'
          },
  },
  cardImage: {

    maxWidth: '100%',
    height: 'auto',
    [breakpoint(767)]: {
      maxWidth: '30%',
      position:'absolute',
        },
  },
});
