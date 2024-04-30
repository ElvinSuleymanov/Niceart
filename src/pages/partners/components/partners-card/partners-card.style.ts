import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';
import { breakpoint, transition } from 'assets/styles/abstracts/mixins';
import sizes from 'assets/styles/abstracts/sizes';
import { rem } from 'assets/styles/abstracts/functions';
const boxShadow = `6px 8px 20px ${colors.fadedBg}`;

export const usePartnersCardStyles = createUseStyles({
  partnersCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: sizes.base,
    gap: sizes.base,
    border: `1px solid ${colors.white}`,
    backgroundColor: colors.white,
    borderRadius: sizes.borderRadius,
    padding: sizes.base,
    boxShadow: boxShadow,
    transition: transition(),
    maxWidth: sizes.base * 17.5,
    height: sizes.base * 6.875,
    overflow: 'hidden',
    [breakpoint(768)]: {
      maxWidth: sizes.base * 15,
    },
    [breakpoint(576)]: {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  partnersHead: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: sizes.base,
  },
  partnersImage: {
    width: sizes.base * 2,
    height: sizes.base * 2,
    objectFit: 'cover',
    borderRadius: '50%',
    minWidth: sizes.base * 2,
  },
  partnersName: {
    marginTop: sizes.base / 2,
    fontSize: sizes.base * 1.125,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  partnersButton: {
    marginTop: sizes.base / 2,
    backgroundColor: colors.fadedBg,
    color: colors.greenMain,
    border: 'none',
    borderRadius: sizes.borderRadiusSm,
    padding: `${sizes.base / 4}px ${sizes.base / 3}px`,
    fontSize: sizes.base * 0.83,
    cursor: 'pointer',
    transition: transition(),
    '&:hover': {
      backgroundColor: colors.greenMain,
      color: colors.white,
    },
  },
  modalBg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.fadedBg,
    zIndex: 1000,
  },
  cancelBtn: {
    borderColor: colors.greenMain,
    borderWidth: rem(1),
    borderRadius: rem(8),
  },
  image: {
    borderRadius: sizes.borderRadiusCircle,
    width: rem(60),
    heigth: rem(60),
  },
  logo: {
    borderRadius: sizes.borderRadiusCircle,
    width: rem(32),
    height: rem(32),
  },
});
