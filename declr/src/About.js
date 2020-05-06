
import React, { Component } from 'react';
import {Grid, Paper, CardContent, CardActions, Button, CardActionArea, CardMedia,  Card, Typography, Icon} from '@material-ui/core';



class About extends Component {
    render(){
        return (
            <div style={{padding: '20'}}>
                
                <Grid container direction = "column" alignItems="center" spacing = {0} style={{ minWidth:'5em', minHeight:'12em'}} >
                    <div style={{padding:'20'}}>
                    <Grid item  xs={4} alignItems = "center" justify="center" style={{backgroundColor: 'white', minWidth:'30vw'}}>
                        <div>
                            <div style={{fontFamily: 'Muli', fontWeight: '700', fontSize: '6vw'}}>&nbsp;Noah</div>
                            <div style={{fontFamily: 'Muli', fontWeight: '700', fontSize: '6vw'}}>&nbsp;Nichols</div>
                            <h2 style={{fontFamily: 'Muli', fontWeight: '700', fontSize: '2.1vw'}}>&nbsp;&nbsp;&nbsp;Software Developer</h2>
                            <br></br>
                        </div>
                    </Grid>
                    </div>
                    <br></br>
                    
                    <Grid item xs={4} justify="center" alignItems="center" spacing = {0} style={{backgroundColor: '#353535', minWidth:'30vw'}}>
                        <br></br>
                        <div style={{textAlign: 'center', position: 'relative' }}>
                            <img src={require('./images/cards/portrait.jpg')} alt="Me" style={{height:'12vh', minHeight:'10em', width:'10vw', minWidth:'10em', display: 'inline-block', borderRadius: '50%'}}></img>
                        </div>
                        <div style={{textAlign: 'center', color: '#ffffff',fontFamily: 'Muli', fontWeight: '700', fontSize: '2vw'}}>
                            About me
                        </div>
                        <div style={{ color: '#ffffff',fontFamily: 'Muli', fontWeight: '700', fontSize: '1.5vw'}}>
                            <bold>&nbsp;&nbsp;Mobile: </bold>
                        </div>
                        <div style={{ color: '#ffffff',fontFamily: 'Muli', fontWeight: '700', fontSize: '1.5vw'}}>
                            <bold>&nbsp;&nbsp;Mobile: </bold>
                        </div>
                        <div style={{ color: '#ffffff',fontFamily: 'Muli', fontWeight: '700', fontSize: '1.5vw'}}>
                            <bold>&nbsp;&nbsp;Mobile: </bold>
                        </div>
                        <div style={{ color: '#ffffff',fontFamily: 'Muli', fontWeight: '700', fontSize: '1.5vw'}}>
                            <bold>&nbsp;&nbsp;Mobile: </bold>
                        </div>
                    </Grid>
                    
                    
                   
                    
                        
                        
                    
                </Grid>
            </div>

            );
        }
    
    }
    
    export default About;