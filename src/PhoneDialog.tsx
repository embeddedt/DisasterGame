import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

const PhoneDialog: React.StatelessComponent<React.ComponentProps<typeof Dialog>> = (props) => {
    const theme = useTheme();
    let { fullScreen, ...rest } = props;
    fullScreen = fullScreen || useMediaQuery(theme.breakpoints.down('sm'));
    return <Dialog {...rest} fullScreen={fullScreen}>{props.children}</Dialog>;
};
export default PhoneDialog;