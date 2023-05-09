import * as React from 'react';
import PropTypes from 'prop-types';
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
import {DialogActions, DialogContent, Grid, Paper, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import theme from './theme';
import {useRef} from "react";
import {createContacts} from "../services/contactServices";


const SimpleDialog = (props) => {
    const {onClose, open} = props;
    const nameEl = useRef(null);
    const numEl = useRef(null);
    const jobEl = useRef(null);
    const photoEl = useRef(null);
    const emailEl = useRef(null);

    const handleClose = () => {
        onClose();
    };
    const handleCreate = async () => {
        const contactObj =
            {
                fullName: nameEl.current.value,
                mobile: numEl.current.value,
                job: jobEl.current.value,
                photo: photoEl.current.value,
                email: emailEl.current.value,
            }
        const {status} = await createContacts(contactObj);
        if (status === 201) {
            handleClose();
        }
    }
    const handleListItemClick = (value) => {
        onClose(value);
    };


    return (

        <Dialog onClose={handleClose} open={open}>

            <DialogTitle>ساخت مخاطب جدید</DialogTitle>
            <DialogContent>
                <Grid sx={{


                    width: "50%",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    paddingBottom: "10px",
                    alignItems: "center",
                    justifyContent: "center"

                }}>
                    <Grid xs={6} sx={{paddingBottom: "20px"}}>
                        <form>
                            <TextField id="standard-basic"
                                       label="نام و نام خانوادگی"
                                       variant="standard"
                                       name="fullName"
                                       sx={{display: "block"}}
                                       inputRef={nameEl}

                            />
                            <TextField id="standard-basic"
                                       label="شماره موبایل"
                                       variant="standard"
                                       name="number"
                                       sx={{display: "block"}}
                                       inputRef={numEl}

                            />
                            <TextField id="standard-basic"
                                       label="آدرس تصویر"
                                       variant="standard"
                                       name="photo"
                                       sx={{display: "block"}}
                                       inputRef={photoEl}

                            />
                            <TextField id="standard-basic"
                                       label="شغل"
                                       variant="standard"
                                       name="fullName"
                                       sx={{display: "block"}}
                                       inputRef={jobEl}

                            />
                            <TextField id="standard-basic"
                                       label="آدرس ایمبل"
                                       variant="standard"
                                       name="email"
                                       sx={{display: "block"}}
                                       inputRef={emailEl}

                            />
                        </form>
                    </Grid>
                    <Grid xs={6}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQA60GAOBBNt2QfS4jIIjuNX3YWW0GwQu7g&usqp=CAU"
                            alt="ساخت مخاطب جدید"/>

                    </Grid>


                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>انصراف</Button>
                <Button onClick={handleCreate} autoFocus>ایجاد مخاطب</Button>
            </DialogActions>


        </Dialog>


    )
        ;
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,

};
export default SimpleDialog;
