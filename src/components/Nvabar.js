import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Link } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
function Nvabar({ color }) {
    return (
        <AppBar position='fixed'
            sx={{ backgroundColor: color }}
        >
            <Toolbar>
                <LibraryBooksOutlinedIcon sx={{ mr: 2 }} />
                <Grid container
                    justifyContent='space-between'
                >
                    <Typography
                        variant="h6"
                        // color="inherit" noWrap
                        sx={{ cursor: "pointer" }}
                    >
                        <Link href='/' sx={{ textDecoration: "none" }}>
                            <Typography color='white'>Home</Typography>
                        </Link>
                    </Typography>
                </Grid>
            </Toolbar>
        </AppBar>

    );
}
export default Nvabar;