import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      height:700
    },
    paper: {
      // spadding: theme.spacing.unit * 4,
      marginTop: 10,
      padding: 30,
      height:600
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
function Home(props) {
    const classes = useStyles();
    

    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
          <Container >
           <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
  
          >
            WELCOME..{" "}
          </Typography>
          <Grid container >
              <Grid item >
              <Typography
            color="textSecondary"
            gutterBottom
            variant="h5"
  
          >
        This Web App build for Development Test for <a href="https://www.kapsarc.org/">KAPSARK</a> to provide excrated data from
    <a href="http://www.jodidb.org/ReportFolders/reportFolders.aspx?sCS_referer=&sCS_ChosenLang=en">Jodidb.org</a>
    </Typography>
    <Typography>Unit - Thousand Barrels per day (kb/d)</Typography>
    <Typography>Product - Crude oil </Typography>
    <Typography>BALANCE - Exports </Typography>
    <Typography><a class="btn btn-primary btn-medium" href="http://www.jodidb.org/TableViewer/tableView.aspx?ReportId=93906" role="button">
        Orignal Data..
        </a>
          </Typography>
              </Grid> 
           
          </Grid>
        </Container>
        </Paper>
      </div>
      )
}
Home.propTypes = {
}
export default Home;
