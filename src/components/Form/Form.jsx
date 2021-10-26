import React, { useState }  from 'react';
import styles from './form.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';




export default function Form () {

    
    return (
        <div className = {styles.back}>

            <form className = {styles.form}>
                <h2 className ={styles.title}>Enter</h2>

                <div style={{display:'flex', justifyContent:'space-around'}}>

                <Link to="/register" className ={styles.sign}>Sign Up</Link>
                <Link to="/login" className ={styles.log}>Log In</Link>

                </div>        
            </form>
        </div>
    )
}