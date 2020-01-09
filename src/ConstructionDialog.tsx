import React from 'react';
import { ConstructionType } from './Construction';
import ConstructionBuildOptions from './ConstructionBuildOptions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { Buildable } from './Building';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export interface ConstructionDialogProps {
    show: boolean;
    type: ConstructionType;
    onBuildCancel: () => void;
    onChooseItem: (item: Buildable) => void;
}

const ConstructionDialog: React.StatelessComponent<ConstructionDialogProps> = (props) => {
    const isTeardown = props.type == ConstructionType.Teardown;
    return <Dialog open={props.show} onClose={props.onBuildCancel}>
        <DialogTitle>DEVELOPMENT: {ConstructionType[props.type]}</DialogTitle>
        <DialogContent dividers>
            {!isTeardown && <Typography>
                Standard grass is easy to build on.
            </Typography>}
            {!isTeardown ? <ConstructionBuildOptions type={props.type} onChooseItem={props.onChooseItem}/> : <Typography>Are you sure you want to remove this?</Typography>}
        </DialogContent>
        <DialogActions>
            <Button onClick={props.onBuildCancel} color="primary">
                {isTeardown ? "No" : "Cancel"}
            </Button>
            {isTeardown && <Button onClick={() => props.onChooseItem(null)} color="primary">
                Yes
            </Button>}
        </DialogActions>
    </Dialog>;
};

export default React.memo(ConstructionDialog);