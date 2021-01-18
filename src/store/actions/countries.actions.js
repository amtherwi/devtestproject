import * as Type from '../constats'

export const setSearchField = (text) => ({
    type: Type.CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestCountries = () => (dispach) =>{
    dispach({
        type: Type.REQUEST_COUNTRIES_PENDING
    });
    fetch('http://localhost:8000/api/countries')
    .then(response => response.json())
    .then(data => dispach({
        type: Type.REQUEST_COUNTRIES_SUCCESS,
        payload: data.data
    }))
    .catch(error => dispach({
        type: Type.REQUEST_COUNTRIES_FAILED,
        payload: error
    }))
}
export const getCountryValues = (country) => (dispach) =>{
    dispach({
        type: Type.REQUEST_COUNTRY_VALUES
    });
    fetch('http://localhost:8000/api/countries/' + country )
    .then(response => response.json())
    .then(data => dispach({
        type: Type.REQUEST_COUNTRY_VALUES,
        payload: data.data
    }))
    .catch(error => dispach({
        type: Type.REQUEST_COUNTRIES_FAILED,
        payload: error
    }))
}
export function openDialog(country) {
    return {
        type: Type.OPEN_DAILOG,
        payload: country
    }
}

export function closeDialog() {
    return {
        type: Type.CLOSE_DAILOG
    }
}

