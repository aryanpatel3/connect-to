import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    MemberCard: {
        flexGrow: "1",
    }, 
    root : {
        maxWidth : 230, 
    }, 
    medium : {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
}));


const MemberCard = ({ key, text, MemberCard, MemberCards, setMemberCards }) => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar,classes.medium}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="user2@gmail.com"
                />
            </Card>


        </div>
    )
}
export default MemberCard;