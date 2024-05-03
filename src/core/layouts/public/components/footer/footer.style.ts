import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import { createUseStyles, Styles } from 'react-jss';
import sizes from 'assets/styles/abstracts/sizes';
import { breakpoint } from 'assets/styles/abstracts/mixins';
const styles: Styles = {
  footerContainer: {
    marginTop: rem(250),
    width: sizes.full,
    [breakpoint(390)]: {
      marginTop:rem(90)
    }
  },
  footer: {
    backgroundColor: colors.fadedBg,
    bottom: rem(0),
    right: rem(0),
    left: rem(0),
  },
  isOpen: {
    paddingLeft: rem(sizes.leftMenu),
  },
  footerSm: {
    maxWidth: rem(1240),
    margin: '0 auto',
    padding: '0 15px',
    [breakpoint(768)]: {
      display: 'flex',
      justifyContent: 'center',
      gap:rem(20)
    },
    [breakpoint(992)]: {
      '& .ant-col': {
        '& .ant-flex': {
          alignItems:'center'
        }
      }
    }
  },
  footerLink: {
    cursor: 'pointer',
    color: colors.textMain,
    textAlign:'center'
  },
  footerCopy: {
    color: colors.greenMain,
    textDecoration: 'underline',
  },
  footerBottom: {
    [breakpoint(992)]: {
      justifyContent:'center',
      gap:rem(20)
    }
  }
};

export const useFooterStyles = createUseStyles(styles);
