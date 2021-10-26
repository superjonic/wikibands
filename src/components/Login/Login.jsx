import React, {useState} from "react";
import styles from './login.module.css';
import  axios  from 'axios';

export default function Login(){
    const [input, setInput ] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className = {styles.back}>

        <form className = {styles.form}>
            <h2 className ={styles.title}>Login</h2>

            <div className={styles.inputs}>
            
                <label>Email</label>    
                <input type="text" name="email" value={input.email} onChange={handleChange} />    

                <label>Password</label>
                <input type="text" name="password" value={input.password} onChange={handleChange}/>   

                <input type="submit" />  
            </div>            
        </form>
    </div>
    )
}