


import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper, Box } from '@material-ui/core';
import Description from './Description';


class Home extends Component {
    render(){
        return (
            <Box>
            <Grid container direction = "row" justify = "flex-start" alignItems="stretch" spacing={0}>
                <Grid item xs = {4} alignItems="stretch">
                    <Paper >xs</Paper>
                </Grid>
                <Grid item xs={8} alignItems="stretch">
                    <Description/>
                </Grid>
                
            </Grid>
            </Box>
        );
    }
}

export default Home;
