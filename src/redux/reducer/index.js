import { 
  GET_BANDS,
  GET_ALBUMS, 
  GET_BAND_DETAIL,
  GET_ALBUMS_BAND,
  ORDER_BYNAME_ASC, 
  ORDER_BYNAME_DESC,
  FILTER_BYGENRE, 
  } from "../actions";


const initialState = {
  bands: [],
  albums: [],
  bandDetail: {
    data: {},
    albums: []
  }
};

function rootReducer (state = initialState, action) {     
    switch(action.type) {
      // Aca va tu codigo;  
     
      case GET_BANDS:
        return {
          ...state,
          bands: action.payload
        }   
      case GET_ALBUMS:
        return {
          ...state,
          albums: action.payload
        }   
      case GET_BAND_DETAIL:
          return {
            ...state,
            bandDetail:{
              ...state.bandDetail,
              data: action.payload
            } 
          }   
      case GET_ALBUMS_BAND:
           return {
            ...state,
            bandDetail: {
              ...state.bandDetail,
              albums: action.payload
            }
          }

      case ORDER_BYNAME_ASC:
        return {
          ...state,
          bands: [...state.bands].sort((prev, next) => {
            if(prev.name > next.name) return 1
            if(prev.name < next.name) return -1
            return 0
          })
        }
      case ORDER_BYNAME_DESC:
        return {
          ...state,
          bands: [...state.bands].sort((prev, next) => {
            if(prev.name > next.name) return -1
            if(prev.name < next.name) return 1
            return 0
          })
        }   
      case FILTER_BYGENRE:
        return {
          ...state,
          bands: state.bands.filter((band) => {
             return band.genreCode.find((genre) =>{ 
               return genre.toLowerCase() === action.payload
              })
          })
        }   
        
        default:
        return state;
    }
  }
  
  export default rootReducer;