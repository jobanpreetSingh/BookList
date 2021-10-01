import React from 'react';
import { Typography, Box } from '@mui/material';
function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <Typography>
                BOOK DETAILS
            </Typography>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
function Footer(props) {
    return (
        <>
            {/* Footer */}
            < Box sx={{ p: 6 }
            } component="footer" >
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box >
            {/* End footer */}
        </>
    );
}
export default Footer;