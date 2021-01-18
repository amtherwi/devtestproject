// import React, { useEffect, useState } from "react";
// import Container from "@material-ui/core/Container";
import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
// import { useHistory } from "react-router-dom";
// import Chart from "./Chart";
// import CountryDetails from '../views/CountryDetails'
import { useDispatch } from 'react-redux';
import { openDialog } from '../store/actions/countries.actions'
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  },
  value:{
    paddingTop:20,
    textAlign:"center",
    textTransform:"uppercase"
  },
  country:{
    textTransform:"uppercase",
  }
});

function Country({ country, value }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  // let history = useHistory();
  // function handleClick(counrty) {
  //   //setOpen(true);
  // }

  
  return (
    <div>
      <Card className={classes.card}>
        {/* <CardMedia
          className={classes.media}
          
        >
        <Chart />
        </CardMedia> */}
        <CardContent>
        <Typography className={classes.country} align="center" variant="body2" component="span">
            {country}
          </Typography>

          <Typography className={classes.value} variant="h6" color="textPrimary" component="h3">
            {Math.round(value.toFixed(3)) + " " } (kb/d) 
          </Typography>
        </CardContent>
        <CardActions>
        <Button 
        color="primary" 
        size="medium"
        onClick={event => dispatch(openDialog(country))}
        >
        More..
        </Button>
      </CardActions>
      </Card>
     
    </div>
  );
}

export default Country;