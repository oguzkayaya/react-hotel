import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useState } from 'react';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomSnackBar({ message = "Default Message", status = "success", setClose, vertical="top", horizontal="center" }) {
    const [open, setOpen] = useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setClose(false);
    };
    return (
        <div>
            <Snackbar anchorOrigin={{ vertical: vertical, horizontal: horizontal }} open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert severity={status}>{message}</Alert>
            </Snackbar>
            {/* <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information message!</Alert>
            <Alert severity="success">This is a success message!</Alert> */}
        </div>
    );
}
