/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography, Container, Paper, Button, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import Footer from '../components/Footer';
import Nvabar from '../components/Nvabar';
//change footer color using hoc 
const FooterHoc = (props) => {
    return (
        <Grid container
            justifyContent='center'
            sx={{
                backgroundColor: "#FF5858"
            }}
        >
            {props.cmp}
        </Grid>
    )
}
function BookDetails(props) {
    const location = useLocation();
    const [bookDetails, setBookDetails] = useState();
    const { items } = useSelector(state => state.fetchBooksReducer)
    const { id } = location.state;
    //CODE TO FILTER DATA FROM REDUX STORE
    const filteredData = items && items.filter((filterItem) => {
        return filterItem.id.includes(id)
    })

    useEffect(() => {
        setBookDetails(filteredData)
    }, [])

    return (
        <Grid>
            <Nvabar color='#FF5858' />
            {/* Heading of page START */}
            <Grid container
                justifyContent="space-around"
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 4,
                }}
                xs={12} md={12} lg={12}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h3"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        sx={{
                            pt: 5
                        }}
                    >
                        <b> Book Details</b>
                    </Typography>
                </Container>
            </Grid>
            {/* Heading of page END */}

            {/* BOOK DETAILS DESIGN START */}
            <Grid container
                justifyContent='center'

                xs={12} md={12} lg={12}
            >
                {
                    !bookDetails
                        ?
                        (<Grid container
                            justifyContent='center'
                            xs={8} md={8} lg={12}
                        >
                            <Typography variant='h4' color='GrayText'><b>Please select book from the Book List</b></Typography>
                        </Grid>)
                        :
                        <Paper sx={{
                            width: '80%',
                            backgroundColor: "whitesmoke",
                            boxShadow: 1,
                            borderRadius: 1,
                            p: 2,
                            marginTop: "2%",
                            maxHeight: '70vh',
                            overflow: "auto"
                        }}>
                            <Grid container
                                justifyContent='center'
                                direction='column'
                                alignContent='center'
                                xs={12} md={12} lg={12}
                            >
                                {console.log(bookDetails)}
                                <Grid container item
                                    justifyContent='center'
                                    xs={12} md={12} lg={12}
                                >
                                    <img alt='#' src={bookDetails && bookDetails[0].volumeInfo.imageLinks.thumbnail} />
                                </Grid>

                                <Grid container item
                                    justifyContent='center'
                                    direction='column'
                                    pt='2%'
                                    xs={8} md={12} lg={12}
                                >
                                    <Typography textAlign='center'><b>{bookDetails && bookDetails[0].volumeInfo.authors}</b></Typography>
                                    <Typography variant='body1' textAlign='center'><b>{bookDetails && bookDetails[0].volumeInfo.subtitle}</b></Typography>
                                    <Typography variant='h10' textAlign='center' color='GrayText'><p>{bookDetails && bookDetails[0].volumeInfo.title}</p></Typography>
                                    <Typography variant='h10' textAlign='center' color='GrayText'>Page Count:{bookDetails && bookDetails[0].volumeInfo.pageCount}</Typography>
                                </Grid>
                                <Grid container
                                    justifyContent='space-around'
                                    alignContent="center"
                                    pt='8%'
                                    xs={12} md={12} lg={12}
                                    spacing={2}
                                >
                                    <Grid item>
                                        <Button variant='outlined' onClick={() => bookDetails && window.open(bookDetails[0].accessInfo.pdf.downloadLink)}>Download</Button>
                                    </Grid>

                                    <Grid item><Button variant='outlined' onClick={() => bookDetails && window.open(bookDetails[0].saleInfo.buyLink, '_blank')}>Buy Link</Button></Grid>
                                    <Grid item> <Button variant='outlined' onClick={() => bookDetails && window.open(bookDetails[0].volumeInfo.previewLink, '_blank')}>Preview</Button></Grid>

                                </Grid>
                                <br />
                                <Divider />
                                <Grid container item
                                    justifyContent='ceneter'
                                    pt='2%'
                                >

                                    <Typography variant='h10' textAlign='center' ><b>Description:</b>{bookDetails && bookDetails[0].volumeInfo.description}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>

                }

            </Grid>
            {/* BOOK DETAILS DESIGN  END*/}
            <Grid container pt='2%'>
                <FooterHoc cmp={<Footer />} />
            </Grid>

        </Grid >
    );
}
export default BookDetails;