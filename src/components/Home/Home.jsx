import React from "react";
import styles from './home.module.css';
import Bands from "../Bands/Bands";

export default function Home(){

    

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                

                <div className={styles.boxTitle}>                    
                    <button>Sort by Name Asc</button>
                    <button>Sort by Name Desc</button>
                    <button>Filter by Genre</button>
                </div>
                
                <h1>WikiBands</h1>
                
                <button>Logout</button>
                

            </header>
           

            
            <Bands />

            
           

        </div>
    )
}