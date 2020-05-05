


import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper, Box } from '@material-ui/core';
import Projects from './Projects';


class Home extends Component {
    render(){
        return (
            
            <Box>
            <Grid container direction = "row" justify = "flex-start" alignItems="stretch" spacing={0} >
                <Grid item xs = {4} alignItems="stretch" style={{backgroundColor: '#414141', height:'100vh'}}>
                    <div>
                        my info goes here
                    </div>
                </Grid>
                <Grid item xs={8} alignItems="stretch" style={{backgroundColor: '#313131'}}>
                    <Projects/>
                </Grid>
                
            </Grid>
            </Box>
        );
    }
}

export default Home;
