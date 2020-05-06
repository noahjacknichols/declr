
import React, { Component } from 'react';
import {Grid, Paper, CardContent, CardActions, Button, CardActionArea, CardMedia,  Card, Typography, Icon} from '@material-ui/core';
import { sizing } from '@material-ui/system'
import GitHubIcon from '@material-ui/icons/GitHub';

class Description extends Component {
    render(){
        return (

            <div style = {{ padding: 20}}>
                <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700;900&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Muli:wght@500;700&display=swap" rel="stylesheet"></link>
                <Grid container direction = "column" alignItems="center" spacing = {4} >
                    <Grid container item xs={12} justify="center"alignItems="center" spacing = {2} style={{minWidth:'60vw'}}>
                    <Grid item  xs={12} justify="center" style={{minWidth:'60vw'}}>
                        
                        <Card elevation = {3} square style={{}}>
                            <CardActionArea>
                                <CardMedia
                                    wide
                                    component="img"
                                    alt="card img"
                                    height = "200"
                                    image= {require('./images/cards/img1.gif')}
                                    title="img1"/>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Muli', fontWeight: '700', fontSize: '1.5vw'}}>
                                    Java Compiler/Interpreter
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Muli', fontWeight: '700', fontSize: '0.9vw'}}>
                                    this is a test of my project 1 body 
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button variant="contained" color="default" startIcon={<GitHubIcon/>} href ="https://github.com/noahjacknichols/Compiler" style={{fontFamily: 'Muli', fontWeight: '700'}}>
                                    Github
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs ={12} style={{minWidth:'60vw' }}>
                        <Card elevation = {3} square>
                            <CardContent>
                                <h1>eee urrr</h1>
                                <div style={{fontFamily: 'Muli', fontWeight: '700'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu est ex. Phasellus consequat nunc at mauris congue scelerisque. Sed metus ipsum, imperdiet a quam non, mollis molestie diam. Nulla vehicula est ut consequat lacinia. Donec quis massa tellus. Etiam porttitor sagittis elit. Sed sed blandit dolor. Phasellus hendrerit, lectus vel pharetra aliquam, nunc purus pretium leo, sed interdum neque massa ut nisl. Duis et pulvinar nibh, et venenatis mauris.

Phasellus efficitur ligula odio, et cursus elit malesuada a. In sed enim mattis, eleifend massa in, eleifend turpis. Proin scelerisque mauris sed lacus rhoncus ultrices. In accumsan magna at orci aliquet viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer hendrerit eros quis sem luctus, eleifend euismod nisi blandit. Integer non magna nec arcu suscipit eleifend non id lacus.

Praesent mollis, tortor sed laoreet volutpat, nunc neque lobortis mi, dignissim sollicitudin eros metus ut nulla. Vivamus suscipit leo at nisl consectetur semper a at nisl. Fusce euismod commodo ex, in eleifend odio tempus eget. Quisque porta nisl sed purus tristique, eget tempus ligula volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed tellus tellus. Nullam tortor nunc, laoreet vitae sem ut, commodo tincidunt mauris. Cras lacinia commodo tempus. Curabitur ullamcorper eros eu blandit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam iaculis quam porttitor feugiat hendrerit.</div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs ={12} style={{minWidth:'60vw' }}>
                    <Card elevation = {3} square>
                            <CardContent>
                                <h1>
                                    Experience
                                </h1>
                                <div style={{fontFamily: 'Muli', fontWeight: '700'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu est ex. Phasellus consequat nunc at mauris congue scelerisque. Sed metus ipsum, imperdiet a quam non, mollis molestie diam. Nulla vehicula est ut consequat lacinia. Donec quis massa tellus. Etiam porttitor sagittis elit. Sed sed blandit dolor. Phasellus hendrerit, lectus vel pharetra aliquam, nunc purus pretium leo, sed interdum neque massa ut nisl. Duis et pulvinar nibh, et venenatis mauris.

Phasellus efficitur ligula odio, et cursus elit malesuada a. In sed enim mattis, eleifend massa in, eleifend turpis. Proin scelerisque mauris sed lacus rhoncus ultrices. In accumsan magna at orci aliquet viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer hendrerit eros quis sem luctus, eleifend euismod nisi blandit. Integer non magna nec arcu suscipit eleifend non id lacus.

Praesent mollis, tortor sed laoreet volutpat, nunc neque lobortis mi, dignissim sollicitudin eros metus ut nulla. Vivamus suscipit leo at nisl consectetur semper a at nisl. Fusce euismod commodo ex, in eleifend odio tempus eget. Quisque porta nisl sed purus tristique, eget tempus ligula volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed tellus tellus. Nullam tortor nunc, laoreet vitae sem ut, commodo tincidunt mauris. Cras lacinia commodo tempus. Curabitur ullamcorper eros eu blandit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam iaculis quam porttitor feugiat hendrerit.</div>
                            </CardContent>
                        </Card>
                    </Grid>
                    </Grid>

                </Grid>
            </div> 


        );
    }

}

export default Description;