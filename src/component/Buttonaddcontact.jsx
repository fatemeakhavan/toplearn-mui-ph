import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import {blue} from '@mui/material/colors';
import {Link} from "react-router-dom";
import {TextField} from "@mui/material";
import SimpleDialog from "./َAddcontact";

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);

    };
    return (
        <div>

            <Button variant="outlined" onClick={handleClickOpen}>
                ساخت مخاطب جدید
            </Button>
            <SimpleDialog

                open={open}
                onClose={handleClose}
            />
        </div>
    );
}