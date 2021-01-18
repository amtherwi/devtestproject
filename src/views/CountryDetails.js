import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux'
import { closeDialog } from '../store/actions/countries.actions'

import Chart from '../components/Chart'
import { List, ListItem } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'flex',
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const CountryDetails = ({ country, open }) => {

  // const [values, setValues] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const [chartValues, setChartValue] = useState([]);
  const [chartLabels, setChartLabel]= useState([]);

  const dispatch = useDispatch();

  const getCountryValues = (country) => {
    fetch("http://localhost:8000/api/countries/" + country)
      .then((res) => res.json())
      .then((data) => {
        let k = Object.keys(data.data);
        //console.log("k: " + k)
        for (let row = 0, len = k.length; row < len; row++) {
            //console.log("["+ data.data[row].monthYear +", "+ data.data[row].value+"]")
            // setTheArray(oldArray => [...oldArray, newElement]);
            setChartLabel(chartLabels => [...chartLabels, data.data[row].monthYear]);
            setChartValue(chartValues => [...chartValues, parseInt(data.data[row].value)]);
        }
         //console.log("lable: "+chartLabels);
         //console.log("value: "+chartValues);

      })
      .then(() => setIsComplete(true))
       
  }
  
  useEffect(
    () => {
      getCountryValues(country);
    },
    [country]
  );
  
  useEffect(() => {
    return () => {
      // if(chartLabels.length===15){
      //   setIsComplete(true)
      // }
      setChartLabel([]);
      setChartValue([])
      console.log("cleaned up");
    };
  }, []);

  const handleClose = () => {
    dispatch(closeDialog());
  };

  return (
    <div>

      <Dialog fullScreen={false} fullWidth={true} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {country}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>

          </Typography>
          <Grid>
          {isComplete?
          <Chart country={country} chartLabels={chartLabels} chartValues={chartValues}/>
          :null
          }
          
            
          </Grid>
        </DialogContent>

      </Dialog>
    </div>
  );
}

export default CountryDetails;