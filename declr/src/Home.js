


import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper, Box } from '@material-ui/core';
import Projects from './Projects';
import About from './About';


class Home extends Component {
    render(){
        return (
            
            <Box style={{backgroundColor: '#ffd961'}}>
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@900&display=swap" rel="stylesheet"></link>
            <Grid container direction = "row" justify = "flex-start" alignItems="stretch" spacing={0} >
                <Grid item xs = {4} alignItems="stretch" style={{ height:'100vh'}}>
                    <About/>
                </Grid>
                <Grid item xs={8} alignItems="stretch" style={{}}>
                    <Projects/>
                </Grid>
                
            </Grid>
            </Box>
        );
    }
}

export default Home;
