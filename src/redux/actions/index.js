// import axios from 'axios';
import axios from 'axios';
export const GET_BANDS = "GET_BANDS";
export const GET_ALBUMS = "GET_ALBUMS";
export const GET_BAND_DETAIL = "GET_BAND_DETAIL";
export const GET_ALBUMS_BAND = "GET_ALBUMS_BAND";
export const ORDER_BYNAME_ASC = "ORDER_BYNAME_ASC";
export const ORDER_BYNAME_DESC = "ORDER_BYNAME_DESC";
export const FILTER_BYGENRE = "FILTER_BYGENRE";


export function getBandDetail(id) {
    return function (dispatch) {
        return axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/bands?id=${id}`) // consulto al servidor 
        .then((band) => {
            dispatch({
                type: GET_BAND_DETAIL,
                payload: band.data[0]
            })
        })
     }
}
export function getAlbumsBand(id) {
    return function (dispatch) {
        return axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/albums?bandId=${id}`) // consulto al servidor 
        .then((albums) => {
            dispatch({
                type: GET_ALBUMS_BAND,
                payload: albums.data
            })
        })
     }
}

export function getBands() {
    return function (dispatch) {
       return axios.get('https://my-json-server.typicode.com/improvein/dev-challenge/bands') // consulto al servidor 
       .then((bands) => {
           dispatch({
               type: GET_BANDS,
               payload: bands.data
           })
       })
    }
}

export function getAlbums() {
    return function (dispatch) {
       return axios.get('https://my-json-server.typicode.com/improvein/dev-challenge/albums') // consulto al servidor 
       .then((albums) => {
           dispatch({
               type: GET_ALBUMS,
               payload: albums.data
           })
       })
    }
}


//ordenamiento
export function orderByNameAsc(){
    return {
        type: ORDER_BYNAME_ASC
    }
}
export function orderByNameDesc(){
    return {
        type: ORDER_BYNAME_DESC
    }
}


export function filterByGenre(genre){
    return {
        type: FILTER_BYGENRE,
        payload: genre
    }
}
