import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MemberCard from './MemberCard';
import ProfileCard from './ProfileCard'; 



const useStyles = makeStyles((theme) => ({
    dashLanding: {
        height: '300px',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/raphael-stager-MPAFS1K7oYE-unsplash.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 300px',
        // verticalAlign : 'middle'
        alignItems: 'center'
    },
    dashLandingContent: {
        textAlign: 'center',
        fontSize: '1.5rem',
        fontFamily: 'Roboto Slab',
        verticalAlign: 'middle', 
        alignItems: 'center', 
        paddingTop: '100px'
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        color: '#000',
        fontFamily: 'Roboto Slab'
    },
    content: {
        width: '70%',
        margin: '0 auto',

    },
    moveDown: {
        color: 'rgb(0,0,0)',
        fontSize: '3rem'
    },
}));

function Dashboard() {
    const classes = useStyles();
    const user = {"name": "Sample User", "email" : "sampleUser@gmail.com", "subgroup": "2", "members" : "['sampleuser2@gmail.com, 'sampleuser3@gmail.com']"}

    return (
        <div>
            <CssBaseline />
            <div className={classes.dashLanding}>
                <h1 className={classes.dashLandingContent}>Welcome To Connect2 ! </h1>
            </div>
            <div className = {classes.content}>
                <Grid container spacing={2} p={2}>
                    <Grid item xs ={4}>
                        <p >GROUP MEMBERS</p>
                        <MemberCard m={2}/>
                        <MemberCard m={2}/>
                        <MemberCard m={2}/>

                    </Grid>
                    <Grid item xs ={4}>
                    <p>PROFILE CARD </p>
                        <ProfileCard user = {user} />
                    </Grid>
                    <Grid item xs ={4}>
                    <p> MEETINGS </p>
                    <a href="www.zoom.com//"> Upcoming Zoom Meeting </a>
                    </Grid>
                </Grid>
            </div>            
        </div>
    )

}


export default Dashboard; 