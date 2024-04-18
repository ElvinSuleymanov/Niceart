import colors from 'assets/styles/abstracts/color';
import { createUseStyles, Styles } from 'react-jss';

const styles:Styles = {
    title: {
        color:colors.greenMain
    }
};
export const useStrategyStyles = createUseStyles(styles);