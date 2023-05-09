import * as React from "react";
import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import {deleteContacts, getAllContacts} from "../services/contactServices";
import {useState} from "react";

const DeleteContact = (props) => {
    const {open, onClose, contactFullname, contactId} = props;
    const [loading, setLoading] = useState(false);
    const [contact, setContact] = useState([]);

    const handleClose = () => {
        onClose();
    };

    const removeContact = async () => {
        try {
            setLoading(true)
            const response = await deleteContacts(contactId);
            if (response) {
                const {data: contactData} = await getAllContacts();
                setContact(contactData);
                setLoading(false)
            }

        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"حذف مخاطب"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        حدف شود؟آیا مطمعن هستید که مخاطب{contactFullname}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>منصرف شدم</Button>
                    <Button onClick={() => {
                        removeContact(contactId);
                        handleClose();
                    }}
                            autoFocus>
                        مطمعن هستم
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
        ;
}
export default DeleteContact;

