/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
    Grid, Divider, Typography, List, ListItem,
    ListItemAvatar, ListItemText, Paper
} from '@mui/material';
import Container from '@mui/material/Container';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_BOOKS_SAGA } from '../constant';
import Footer from '../components/Footer';
import Nvabar from '../components/Nvabar';
//change footer color using hoc 
const FooterHoc = (props) => {
    return (
        <Grid container
            justifyContent='center'
            sx={{
                backgroundColor: "#43B692"
            }}
        >
            {props.cmp}
        </Grid>
    )
}
export default function BookList() {
    const history = useHistory()
    const { items } = useSelector((state) => state.fetchBooksReducer)
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState('');
    useEffect(() => {
        dispatch({ type: FETCH_BOOKS_SAGA });
    }, [])

    setTimeout(() => {
        setFilteredData(items)
    }, 1000);

    return (
        <Grid>
            <Nvabar color='#43B692' />
            {/* Heading of page START */}
            <Grid container
                justifyContent="space-around"
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
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
                        <b>Book List</b>
                    </Typography>
                </Container>

            </Grid>
            {/* Heading of page END */}

            {/* BOOK LIST START */}
            <Grid container
                justifyContent='space-around'
                sx={{
                    mt: 2
                }}
                xs={12} md={12} lg={12}
            >
                {
                    !filteredData
                        ?
                        <img alt='#' src='/images/loading.gif' />
                        :
                        <Paper sx={{
                            width: '80%',
                            backgroundColor: "whitesmoke",
                            boxShadow: 1,
                            borderRadius: 1,
                            p: 4,
                            marginTop: "2%",
                            maxHeight: '65vh',
                            overflow: "auto"
                        }}>

                            {

                                filteredData && filteredData.map((data) =>

                                (


                                    <List key={data.id} sx={{ width: '100%', bgcolor: 'background.paper', cursor: "pointer" }}
                                        onClick={() => history.push({
                                            pathname: '/book_details',
                                            state: { id: data.id }
                                        })}
                                    >

                                        <ListItem alignItems="flex-start">
                                            <Grid container

                                                xs={12} md={6} lg={6}
                                            >
                                                <ListItemAvatar>
                                                    <img alt="Remy Sharp" style={{ width: "90%" }} src={data && data.volumeInfo.imageLinks.smallThumbnail} />
                                                </ListItemAvatar>

                                            </Grid>

                                            <Grid container
                                                xs={12} md={6} lg={6}
                                            >
                                                <ListItemText
                                                    primary={<b>{data && data.volumeInfo.title}</b>}
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                sx={{ display: 'inline' }}
                                                                component="span"
                                                                variant="body2"
                                                                color="text.primary"
                                                            >
                                                                {data && data.volumeInfo.subtitle}

                                                            </Typography>

                                                            <Typography><b>{data && data.volumeInfo.authors}</b></Typography>
                                                        </React.Fragment>
                                                    }
                                                />
                                            </Grid>

                                        </ListItem>

                                        <Divider variant="inset" component="li" />
                                    </List>



                                )
                                )
                            }

                        </Paper>


                }
            </Grid>
            {/* BOOK LIST START END */}
            <Grid container pt='2%'>
                <FooterHoc cmp={<Footer />} />
            </Grid>
        </Grid >
    );
}