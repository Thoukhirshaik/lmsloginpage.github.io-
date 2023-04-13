//Get the login form and its elements by their ids.
let form = document.getElementById("login-form");
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");

//Get the error message Elements by their Ids
let usernameErrorMsg = document.getElementById("usernameErr");
let passwordErrorMsg = document.getElementById("passwordErr");


// add a submit event listener to the form 
form.addEventListener('submit',(event)=>{
    // prevent the default event listener of the form
    event.preventDefault();
    //check if the email field is empty or not
    if (emailEl.value === ""){
        //if empty display an error message
        usernameErrorMsg.textContent = "Please Enter Your Email or Username";
    }else{
        // if it is not empty display nothing
        usernameErrorMsg.textContent="";
    }
    //check if password field is empty or not
    if (passwordEl.value === ""){
        //if it is empty display error message
        passwordErrorMsg.textContent ="Please Enter Your Password";

    }else{
        //if it is not empty display nothing
        passwordErrorMsg.textContent ="";
    }
    //check if both email and password field is not empty
    if (emailEl.value !== "" && passwordEl.value !== ""){
        //if it is not empty display an alert message
        alert("Login Successfull");
        //reset form
        form.reset();
    }
})