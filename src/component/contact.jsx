import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {Button, Dialog, DialogActions, DialogTitle, Paper, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import {useEffect, useState} from "react";
import SimpleDialogDemo from "./Buttonaddcontact";
import {deleteContacts, getAllContacts, getAllGroups} from "../services/contactServices";
import DeleteContact from "./Deletecontact";

export default function MediaControlCard() {
    const [Contact, setContact] = useState({
            fullName: "",
            photo: "",
            mobile: "",
            email: "",
            job: "",
        }
    );
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const {data: contactsData} = await getAllContacts();
                setContacts(contactsData);
                setLoading(false);
            } catch (err) {
                console.log(err.message);
                setLoading(false);

            }
        }
        fetchData();
    }, []);


    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    return (

        <>
            <Box width="80%" display="flex" flexWrap="wrap" justifyContent="center" marginTop="25px">

                {contacts.map((contact) => (
                    <Box width="40%" height="200px" display="flex" sx={{backgroundColor: "#999"}} marginRight="20px"
                         marginBottom="20px">
                        <img width="30%" src={contact.photo}/>
                        <Box marginLeft="16px" width="50%" display="flex" flexDirection="column"
                             alignItems="flex-start">
                            <Box display="flex">
                                <Typography variant="h5" fontWeight="bold">نام و نام خانوادگی: </Typography>
                                <Typography variant="h5">{contact.name}</Typography>
                            </Box>
                            <Box display="flex">
                                <Typography variant="h5" fontWeight="bold">شماره: </Typography>
                                <Typography variant="h5">{contact.num}</Typography>
                            </Box>
                            <Box display="flex">
                                <Typography variant="h5" fontWeight="bold">شغل: </Typography>
                                <Typography variant="h5">{contact.job}</Typography>
                            </Box>
                            <Box display="flex">
                                <Typography variant="h5" fontWeight="bold">ایمیل: </Typography>
                                <Typography variant="h5">{contact.email}</Typography>
                            </Box>
                        </Box>
                        <Box width="20%" display="flex" flexDirection="column" alignItems="center">
                            <IconButton
                                aria-label="delete"
                                onClick={handleClickOpen}
                            >
                                <DeleteIcon/>
                            </IconButton>
                            <DeleteContact
                                open={open}
                                onClose={handleClose}
                                cotactFullname={contact.fullName}
                                contactId={contact.id}
                            ></DeleteContact>
                            <IconButton aria-label="delete" disabled color="primary">
                                <DeleteIcon/>
                            </IconButton>
                            <IconButton color="secondary" aria-label="add an alarm">
                                <AlarmIcon/>
                            </IconButton>

                        </Box>
                    </Box>
                ))}

            </Box>

        </>

    );
}
