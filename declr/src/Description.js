
import React, { Component } from 'react';
import {Grid, Paper, CardContent, CardActions, Button, CardActionArea, CardMedia,  Card, Typography} from '@material-ui/core';
import { sizing } from '@material-ui/system'

class Description extends Component {
    render(){
        return (

            <div style = {{padding: 20}}>
                <Grid container direction = "column" justify="center" spacing = {4}>
                    <Grid item  xs={12} >
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    wide
                                    component="img"
                                    alt="card img"
                                    height = "140"
                                    image="./images/cards/yoda.jpg"
                                    title="img1"/>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    this is a test of my project 1 body
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Github
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs ={12}>
                        <Card>
                            <CardContent>
                                <div> this is a test</div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs ={12}>
                        <Card>
                            <CardContent>
                                <div> this is a test</div>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </div> 


        );
    }

}

export default Description;