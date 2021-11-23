import axios from 'axios';
import * as type from '../types';


export const increase = () => (dispatch) => {
    dispatch({
        type: type.INCREASE,
        // payload: 
    });
}

export const decrease = () => (dispatch) => {
    dispatch({
        type: type.DECREASE,
        // payload: 
    });
}

export const movieSearch = (searchTerm) => (dispatch) => {

    try {
        axios.get(`https://www.omdbapi.com/?apikey=85872d3a&s=${searchTerm}&page=1`)
        .then(res => {
            // console.log('res',res);
            // let movieData = res.data.Search;
            // console.log('movieData', movieData);

            dispatch ({
                type: type.SEARCH,
                payload: res.data.Search,
            })
            
    })
    .catch(error => console.log('Error',error));
    } catch (error) {
        console.log('Error',error);
    }
    
}

export const movieDetailsSearch = (ID) => (dispatch) => {
    try {
        axios.get(`https://www.omdbapi.com/?apikey=85872d3a&i=${ID}`)
        .then(res => {
            // console.log('res',res);
            let movieData = res.data;

            dispatch({
                type: type.DETAILS,
                payload: movieData,
            })
            
    })
    .catch(error => console.log('Error',error))
    } catch (error) {
        console.log('Error',error);
    }
}