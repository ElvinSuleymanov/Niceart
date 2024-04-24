
// company-card.style.ts
import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';
import { breakpoint, transition } from 'assets/styles/abstracts/mixins';
import sizes from 'assets/styles/abstracts/sizes';
const boxShadow = `6px 8px 20px ${colors.fadedBg}`;

export const useCompanyCardStyles = createUseStyles({
  companyCard: {
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
  companyHead: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: sizes.base,
  },
  companyImage: {
    width: sizes.base * 2,
    height: sizes.base * 2,
    objectFit: 'cover',
    borderRadius: '50%',
    minWidth: sizes.base * 2,
  },
  companyName: {
    marginTop: sizes.base / 2,
    fontSize: sizes.base * 1.125,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  companyButton: {
    marginTop: sizes.base / 2,
    backgroundColor: colors.fadedBg,
    color: colors.greenMain,
    border: 'none',
    borderRadius: sizes.borderRadiusSm,
    padding: `${sizes.base / 4}px ${sizes.base / 3}px`,
    fontSize: sizes.base * 0.875,
    cursor: 'pointer',
    transition: transition(),
    '&:hover': {
      backgroundColor: colors.greenMain,
      color:colors.white
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
});
