import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

export const useTextGroupstyle =createUseStyles({
    miniTitle: {
        color: colors.mainColor,
        fontSize: rem(16),
        lineHeight: rem(21),
        fontWeight: 600,
        textAlign: 'center',
      },
      title: {
        color: colors.textBlack,
        fontSize: rem(36),
        lineHeight: rem(46),
        fontWeight: 700,
        width: '80%',
        textAlign: 'left',
        [breakpoint(768)]: {
          fontSize: rem(30),
          lineHeight: rem(26),
    
        },
      },
      desc: {
        color: colors.textBlack,
        fontSize: rem(16),
        lineHeight: rem(22),
        textAlign: 'left',
        width: '100%',
        padding: `${rem(20)} ${rem(0)}`,
      },
});