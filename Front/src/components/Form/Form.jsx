import { useState } from "react" 
import validacion from "./validacion";
import style from "../Form/Form.module.css"


const Form = ({login})=>{
    const [userData, setUserData] = useState({
        username: "",
        password: "" , 
        
    });
    const[errors, setErrors]= useState({
        username: "",
        password: "" , 
    })

     const handleInputChange= (event) =>{
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value})
        validacion({...userData, [property]: value}, errors, setErrors)
        
    }
     const submitHandler = (event)=>{
        event.preventDefault();
        login(userData)
     };
     
    return(
 <form onSubmit={submitHandler} className={style.form}>
    <div className={style.gmail}>

    <label htmlFor="username" className={style.ifo} >Gmail</label>
        <input type="email" name="username"
               value={userData.username}
               onChange={handleInputChange} className={style.input}/>  
    </div>

    <div className={style.pass}>
    <label htmlFor="password" className={style.ifo}>Password</label>
        <input type="password" name="password" 
               value={userData.password}
               onChange={handleInputChange} className={style.input}/>
    </div>
        <button type="submit" className={style.Blogin}>PRESS</button>
</form>
)}

export default Form