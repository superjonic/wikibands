import React, {useState} from "react";
import styles from './signup.module.css';
import  axios  from 'axios';


export default function Signup(){
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
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', input)    
    }


    return (
        <div className = {styles.back} >

        <form className = {styles.form}>
            <h2 className ={styles.title}>Register</h2>

            <div className={styles.inputs}>
                <label>Name</label>
                <input type="text" name= "name" value={input.name} onChange={handleChange}/> 

                <label>Email</label>    
                <input type="text" name="email" value={input.email} onChange={handleChange} />    

                <label>Password</label>
                <input type="password" name="password" value={input.password} onChange={handleChange}/>   

                <input type="submit" onSubmit={handleSubmit}  />  
            </div>            
        </form>
    </div>
    )
}