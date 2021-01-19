import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import CountriesList from '../components/CountriesList';
import { connect } from 'react-redux'
import { setSearchField, requestCountries, openDialog, closeDialog } from '../store/actions/countries.actions'
import SearchBox from '../components/SearchBox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountryDetails from '../components/CountryDetails';
import { withRouter } from 'react-router';


const mapStateToProps = state => {
    return {
      searchFiled: state.searchCountries.searchFiled,
      countries: state.requestCountries.countries,
      isPending: state.requestCountries.isPending,
      error: state.requestCountries.error,
      country: state.requestCountries.country,
      open: state.requestCountries.open,
      cuntryValues: state.requestCountries.countryValues,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestCountries: () => dispatch(requestCountries()),
    //   onCountryDetails: (event) => dispatch(openDialog(event.target.value)),
    //   onClose   :   () => dispatch(closeDialog()),
    }
  }
  class Countries extends React.Component {
    
    componentDidMount(){
        this.props.onRequestCountries();
       }

    //const [data, setData] = useState([]);

    // useEffect(() => {
    //   fetch("http://localhost:8000/api/countries")
    //     .then((res) => res.json())
    //     .then((data) => setData(data.data));
    // }, [data]);
    render(){
        const { searchFiled, onSearchChange, countries, isPending, country, open,cuntryValues } = this.props;
        
        const filterCountries = countries.filter(country => {
          return country.country.toLowerCase().includes(searchFiled.toLowerCase())
        })
        return isPending ? 
        <h2>Looding... </h2> :
         (
        <div style={{alignContent:"center", alignItems: "center", marginTop:10}}>
        {/* <Paper > */}
        <Grid>
        <SearchBox searchChange={onSearchChange}/>
        </Grid>
        <Grid>
        <CountriesList countries={ filterCountries }/>
        </Grid>
        <CountryDetails country={country} open={open} />
          </div>    
          );
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Countries)

