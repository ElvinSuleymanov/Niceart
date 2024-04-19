import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

export const useModalStyles = createUseStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 1000,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContent: {
    backgroundColor: '#fefefe',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    width: '60%',
    maxeight: '90%',
    overflowY: 'auto',
  },
  modalImage: {
    width: rem(40),
    height: rem(40),
    objectFit: 'cover',
    borderRadius: '50%',
    minWidth: rem(40),
  },
  closeHover: {
    '&:hover': {
      color: '#000',
    },
  },
  modalText: {
    fontSize: rem(16),
    lineHeight: rem(22),
    color: colors.textMain,
    margin: rem(20) + ' ' + rem(0),
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    gap: rem(40),
    padding: rem(0) + ' ' + rem(30),
    [breakpoint(420)]: {
      maxWidth: '100%',
      height: 'auto',
      flexDirection:'column'
    },
  },
});
