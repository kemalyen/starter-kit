import * as constants from '../constants';

const INITIAL_STATE = { movies: [], genres: [] };

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case constants.GENRE_MOVIES:
            return {...state, movies: action.payload.data };
        case constants.GENRES_MENU:
            return {...state, genres: action.payload.data };

        default:
          return state;
    }
}