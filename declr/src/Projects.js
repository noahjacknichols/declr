
import React, { Component } from 'react';
import {Grid, Paper, CardContent, CardActions, Button, CardActionArea, CardMedia,  Card, Typography, Icon} from '@material-ui/core';
import { sizing } from '@material-ui/system'
import GitHubIcon from '@material-ui/icons/GitHub';

class Description extends Component {
    render(){
        return (

            <div style = {{ padding: 20}}>
                <Grid container direction = "column" alignItems="center" spacing = {4} >
                    <Grid item  xs={8} justify="center" style={{minWidth:'55vw'}}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    wide
                                    component="img"
                                    alt="card img"
                                    height = "200"
                                    image= {require('./images/cards/img1.gif')}
                                    title="img1"/>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Java Compiler/Interpreter
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    this is a test of my project 1 body 
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button variant="contained" color="default" startIcon={<GitHubIcon/>} href ="https://github.com/noahjacknichols/Compiler">
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