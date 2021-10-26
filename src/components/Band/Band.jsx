import React from "react";
import styles from './band.module.css';



export default function Band({name, country, year, genre}){

    return (
        <div className={styles.card}>
            <h2>{name}</h2>
            <p>{genre}</p>
            <h4>{year}</h4>
            <h5>{country}</h5>
        </div>
    )
}