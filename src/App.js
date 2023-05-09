import {ThemeProvider, createTheme} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import "./App.css";
import SearchAppBar from "./component/Navbar";
import Theme from "./component/theme";
import MediaControlCard from './component/contact';
import {Dialog, DialogActions, DialogContent, Paper, Toolbar} from "@mui/material";
import SimpleDialogDemo from "./component/Buttonaddcontact";
import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import {deleteContacts, getAllContacts} from "./services/contactServices";
import {useEffect, useState} from "react";
import {Routes} from "react-router-dom";

//NOTE Create RTL Cache
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

function App() {


    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={Theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>وب سایت شخصی یونس قربانی</title>
                    </Helmet>
                    <SearchAppBar/>
                    <Toolbar/>
                    <Paper sx={{
                        backgroundColor: "#efefef",
                        width: "100%",
                        justifyContent: "center",
                        display: "flex"
                    }}>
                        <MediaControlCard/>
                    </Paper>

                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );

}

export default App;
