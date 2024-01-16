import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBox from './SearchBox';

export default function TopBar() {
    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: "center" }}>
                <Typography variant="h6" color="inherit" component="div">
                    Books
                </Typography>
                <SearchBox/>
            </Toolbar>
        </AppBar>
    );
  }