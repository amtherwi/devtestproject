import * as Types from '../constats'

const initialStateSearch = {
    searchFiled: ''
}

export const searchCountries = 
        (state=initialStateSearch, action={}) =>  {
    switch(action.type) {
        case Types.CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchFiled: action.payload})
        default:
            return state;
    }   

}

const initialStateCountries = {
    isPending: false,
    countries   : [],
    error    : '',
    country: null,
    open: false,
    cuntryValues:[],  
}

export const requestCountries = 
        ( state=initialStateCountries, action={}) => {
    switch(action.type) {
        case Types.REQUEST_COUNTRIES_PENDING:
            return Object.assign({}, state, {isPending: true})
        case Types.REQUEST_COUNTRIES_SUCCESS:
            return Object.assign({}, state, {countries: action.payload, isPending:false})
        case Types.REQUEST_COUNTRY_VALUES:
            return Object.assign({}, state, {cuntryValues: action.payload})
        case Types.REQUEST_COUNTRIES_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending:false})
        case Types.OPEN_DAILOG:
            return Object.assign({}, state, {country: action.payload, open:true})
        case Types.CLOSE_DAILOG:
            return Object.assign({}, state, {country: null, open:false})
        default:
            return state
    }
}