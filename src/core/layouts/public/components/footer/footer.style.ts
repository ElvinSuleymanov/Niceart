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
      marginTop: rem(90),
    },
  },
  footer: {
    backgroundColor: colors.fadedBg,
    bottom: rem(0),
    right: rem(0),
    left: rem(0),
    fontSize: rem(17),
  },
  isOpen: {
    paddingLeft: rem(sizes.leftMenu),
  },
  footerSm: {
    fontSize: rem(17),

    maxWidth: rem(1240),
    margin: '0 auto',
    padding: '0 15px',
    [breakpoint(768)]: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginRight: rem(20),
    },
    [breakpoint(992)]: {
      '& .ant-col': {
        '& .ant-flex': {
          alignItems: 'flex-start',
        },
      },
    },
  },
  footerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',

    [breakpoint(475)]: {
      justifyContent: 'flex-end',
      flexWrap: 'wrap',

      
    },
  },
  footerLink: {
    cursor: 'pointer',
    color: colors.textMain,
    textAlign: 'center',
  },
  footerCopy: {
    fontSize: rem(16),
  },
  footerBottom: {
    [breakpoint(992)]: {
      justifyContent: 'center',
      gap: rem(20),
    },
  },
  footerTerms: {
    color: colors.greenMain,
    textDecoration: 'underline',
    fontSize: rem(17),

    [breakpoint(992)]: {
      display: 'flex',
      flexDirection: 'column',
      gap: rem(20),
    },
  },
  footerRight: {
    fontSize: rem(17),
  },
  footerBottomClasses: {
    [breakpoint(992)]: {
      justifyContent: 'flex-start',
      gap: rem(10),
    },
    paddingTop: rem(30),
    lineHeight: rem(20),
  },
};

export const useFooterStyles = createUseStyles(styles);
