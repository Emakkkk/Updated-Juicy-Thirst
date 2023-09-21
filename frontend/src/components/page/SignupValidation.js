
function Validation(values){

    let error ={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    //name
    if(values.name === ""){
        error.name = "Name should not be empty"
    }
    
    else{
        error.name = ""
    }

    //phonenumber
    if(values.phone_number === ""){
        error.phone_number = "Phone number should not be empty"
    }
    
    else{
        error.phone_number = ""
    }

    //address
    if(values.address === ""){
        error.address = "address should not be empty"
    }
    else{
        error.address = ""
    }

    //birthday
    if(values.birthday === ""){
        error.birthday = "birthday should not be empty"
    }
    else{
        error.birthday = ""
    }

    //email 
    if(values.email ===""){
        error.email = "email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "email didn't match"
    }
    else{
        error.email = ""
    }

    //password 
    if(values.password === ""){
        error.password = "Password should not be empty"
    }
   else if(!password_pattern.test(values.password)){
      error.password = "password didn't match"
  }
    else{
        error.password =""
    }
    return error;
}
export default Validation;