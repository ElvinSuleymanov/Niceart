import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import { createUseStyles, Styles } from 'react-jss';
import sizes from 'assets/styles/abstracts/sizes';
const styles: Styles = {
  footerContainer: {
    marginTop: rem(250),
    width: sizes.full,
  },
  footer: {
    backgroundColor: colors.fadedBg,
    bottom: rem(0),
    right: rem(0),
    left: rem(0),
  },
  isOpen: {
    paddingLeft: rem(sizes.leftMenu),
  }};
export const useFooterStyles = createUseStyles(styles);
