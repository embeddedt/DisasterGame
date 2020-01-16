import React from 'react';


import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const WebGLDialog: React.FunctionComponent<{ glAcknowledged: boolean; onClose: () => void; }> = (props) => {
    return <Dialog open={!props.glAcknowledged} onClose={props.onClose}>
            <DialogTitle>Warning</DialogTitle>
            <DialogContent>
                Your device and/or browser don't support WebGL, which is required for this game to run smoothly.
                <p></p>
                A fallback mode is being used. For the best experience, upgrade to a newer browser or use a newer device.
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={props.onClose}>OK</Button>
            </DialogActions>
    </Dialog>
}

export default WebGLDialog;