import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
    alignItems : 'center'
  },
  media: {
    height: 100,
    backgroundColor : 'rgb(255, 235, 153)'
  },
});

const ProfileCard = ({user}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} m={4}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Sample User Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email  : {user.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Subgroup : {user.subgroup}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          Edit <EditIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProfileCard; 