import React, { useEffect, useState } from 'react'
// import { withRouter } from 'react-router';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BarChart from '../components/BarChart';
import { Card } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height:800
    },
    paper: {
        // spadding: theme.spacing.unit * 4,
        marginTop: 10,
        padding: 30,
        height: 600
        //maxWidth: 500,
    },
    card: {
        maxWidth: 400,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
    grid:{
        paddingTop:10
    },
    title:{
        textTransform:'uppercase',
        paddingTop:10,
        margin:10
    }
});
function Dashboard(props) {
    const classes = useStyles();
    // const [data, setData] = useState([]);
    const [countries, setCountries] = useState([]);
    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/countries_/top_10_countries")
            .then((res) => res.json())
            .then((data) => {
                let k = Object.keys(data.data);
                for (let row = 0, len = k.length; row < len; row++) {
                   
                    setCountries(countries => [...countries, data.data[row].country]);
                    setValues(values => [...values, parseInt(data.data[row].value)]);
                }
            
            })
    }, []);
    useEffect(() => {
        return () => {
          // if(chartLabels.length===15){
          //   setIsComplete(true)
          // }
          setCountries([]);
          setValues([])
          console.log("cleaned up");
        };
      }, []);
    return (
        <div className={classes.root}>
            {/* <Paper className={classes.paper}> */}
               <Container spacing={3}>
                <Grid className={classes.grid}>
                <Card>  
                <Typography
                        color="textPrimary"
                        className={classes.title}
                        gutterBottom
                        variant="h5"
                    >
                        Top 10 Countries has the hiegst of crude oil barrels (kb/d) within last 15 months{" "}
                    </Typography>
                    <BarChart countries={countries} values={values}/>
                </Card>
                </Grid>
                </Container>
            {/* </Paper> */}
        </div>
    )
}

export default Dashboard;
