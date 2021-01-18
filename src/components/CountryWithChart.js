import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from "classnames";
import shortid from "shortid";
import Chart from "./chart3";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

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
      textAlign:"center",
      textTransform:"uppercase"
    }
  });

const CountryWithChart = ({country, value,...props}) => {

    const canvasRef = React.createRef();
    const classes = useStyles();

    useEffect(() => {
        const chartOptions = {
            ...{
                maintainAspectRatio: true,
                responsive: true,
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false,
                    custom: false
                },
                elements: {
                    point: {
                        radius: 0
                    },
                    line: {
                        tension: 0.33
                    }
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: false,
                            ticks: {
                                display: false
                            }
                        }
                    ],
                    yAxes: [
                        {
                            gridLines: false,
                            scaleLabel: false,
                            ticks: {
                                display: false,
                                isplay: false,
                                suggestedMax: Math.max(...props.chartData[0]) + 1
                            }
                        }
                    ]
                }
            },
            ...props.chartOptions
        };

        const chartConfig = {
            ...{
                type: "line",
                data: {
                    ...{
                        labels: this.props.chartLabels
                    },
                    ...{
                        datasets: this.props.chartData
                    }
                },
                options: chartOptions
            },
            ...props.chartConfig
        };

        new Chart(canvasRef.current, chartConfig);
    }, [canvasRef, props.chartConfig, props.chartData, props.chartOptions])

    return (
        <div>
            <Card className={classes.card}>
                {/* <CardMedia
          className={classes.media}
          
        >
        <Chart />
        </CardMedia> */}
                <CardContent>
                    <Typography className={classes.country} variant="body2" component="span">
                        {country}
                    </Typography>

                    <Typography className={classes.value} variant="h6" color="textPrimary" component="h3">
                        {Math.round(value.toFixed(3)) + " "} (kb/d)
          </Typography>
          <canvas
            height={60}
            ref={canvasRef}
            //className={`stats-small-${shortid()}`}
          />
                </CardContent>
                <CardActions>
                    <Button size="small"> More..</Button>
                </CardActions>
            </Card>
            {/* {isOpen?
      <CountryDetails country={country} isOpen = {isOpen} />
        :
        null
      } */}
        </div>

    )
}

CountryWithChart.propTypes = {
    /**
       * The Small Stats variation.
       */
    variation: PropTypes.string,
    /**
     * The label.
     */
    county: PropTypes.string,
    /**
     * The value.
     */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * The percentage number or string.
     */
    percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // /**
    //  * Whether is a value increase, or not.
    //  */
    increase: PropTypes.bool,
    /**
     * The Chart.js configuration object.
     */
    chartConfig: PropTypes.object,
    /**
     * The Chart.js options object.
     */
    chartOptions: PropTypes.object,
    /**
     * The chart data.
     */
    chartData: PropTypes.array.isRequired,
    /**
     * The chart labels.
     */
    chartLabels: PropTypes.array
}

CountryWithChart.defaultProps = {
    increase: true,
    percentage: 0,
    value: 0,
    label: "Label",
    chartOptions: Object.create(null),
    chartConfig: Object.create(null),
    chartData: [],
    chartLabels: []
  };

export default CountryWithChart
