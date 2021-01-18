import React from 'react';
import Country from './Country'
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Scroll from './Scroll';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    // spadding: theme.spacing.unit * 4,
    marginTop: 10,
    padding: 30,
    //maxWidth: 500,
  },
    card: {
      maxWidth: 345,
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fafafa",
    },
    media: {
      height: 300,
    },
  });

const CountriesList = ({countries}) => {
  const classes = useStyles();
  
    return (
      <div className={classes.root}>
      <Scroll>
      <Paper className={classes.paper}>
        <Container>
       
        <Grid container spacing={3}>
          {countries.map((country, i) => (
            <Grid item xs={12} sm={4} key={i}>
                <Country 
                    key= {i}
                    country = {countries[i].country} 
                    value={countries[i].value}
                />
            </Grid> 
            )
          )}
        </Grid>
      </Container>
      </Paper>
      </Scroll>
    </div>
    )
}
export default CountriesList;