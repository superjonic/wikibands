import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBands, getAlbums } from "../../redux/actions";
import Band from "../Band/Band";
import { Link } from "react-router-dom";
import styles from './bands.module.css'


export default function Bands(){
const dispatch = useDispatch()
const bands = useSelector((state) => state.bands)

useEffect(() => {
    dispatch(getBands())
    dispatch(getAlbums())
}, [])

    return (
        
         
            <div className={styles.grid}>
            {
                bands.map((band) => {
                    return ( 
                        <Link to={`/band/${band.id}`} style={{textDecoration: "none"}}>
                            <Band name={band.name} country={band.country} year={band.year} key={band.id} genre={band.genreCode}/>
                        </Link>
                    )
                })
            }
            </div>
        
    )
}