const validacion = (userData, errors, setErrors) =>{
    if (!userData.username) {
        setErrors({...errors, username: "complete el campo"})
    }else if(userData.username > 35){
        setErrors({...errors, username: "supera el maximo de caracteres"})
    }else if(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{3})+$/.test(userData.username)){
        setErrors({...errors, username: "Email invalido"})
    }else{
        setErrors({...errors, username: ""})
    }

 var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,8}$/;
    if(userData.password.match(passw)){
         setErrors({...errors, password: "calve invalida"})
}

}

export default validacion;