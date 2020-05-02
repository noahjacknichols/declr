
import React, { Component } from 'react';
import {Grid, Paper} from '@material-ui/core';

class Description extends Component {
    render(){
        return (
            <div>
                <Grid container direction = "column" justify="center" alignItems="center" spacing={3}>
                    <Grid item xs ={12}>
                        <Paper xs ={12}>
                        <div> this is a test</div>
                        </Paper>
                    </Grid>
                    <Grid item xs ={12}>
                        <div> this is a test</div>
                    </Grid>
                    <Grid item xs ={12}>
                        <div> this is a test</div>
                    </Grid>
                </Grid>
            </div>


        );
    }

}

export default Description;