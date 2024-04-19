import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';

export const useAboutHeadingStyles = createUseStyles({
  content: {
    textAlign: 'center',
    lineHeight: 2,
    width: 'auto',
    padding: `${rem(10)} ${rem(0)}`,
  },
  heading: {
    color: colors.mainColor,
    fontSize: rem(72),
    marginBottom: rem(10),
    [breakpoint(768)]: {
      fontSize: rem(32),
      lineHeight: rem(42),
    },
    lineHeight: rem(80),
    textAlign: 'left',
  },

  buttons: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: rem(20),
    [breakpoint(375)]: {
     width:'80%'
    },
  },
});
