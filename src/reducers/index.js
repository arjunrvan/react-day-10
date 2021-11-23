import { combineReducers } from "redux";
import countReducer from "./countReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import movieReducer from "./movieReducer";


const rootReducer = combineReducers ({
    count: countReducer,
    movie: movieReducer,
    movieDetails: movieDetailsReducer,
})

export default rootReducer;