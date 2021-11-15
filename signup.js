function validate(){

var email = document.getElementById("email");
var password1 = document.getElementById("password1");
var number = document.getElementById("number");
var password2 = document.getElementById("password2");

var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementById("error3");
var error4 = document.getElementById("error4");


    var regemail=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    var regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    var numberreg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    error1.innerHTML="";
    error1.style.color="white";
    email.style.borderColor="green";
    error2.innerHTML="";
    error2.style.color="white";
    number.style.borderColor="green";
    error3.innerHTML="";
    error3.style.color="white";
    password1.style.borderColor="green";
    error4.innerHTML="";
    error4.style.color="white";
    password2.style.borderColor="green";
     
    var status_check=0;
     
    if(regemail.test(email.value)!="1"){
        error1.innerHTML = "invalid email format";
        error1.style.color = "red";
        email.style.borderColor ="red";
        status_check=1;
        }

         if(numberreg.test(number.value)!="1"){
            error2.innerHTML="Invalid Number format";
            error2.style.color="red";
            number.style.borderColor ="red";
         status_check=1;
        }
        

         if(regpwd.test(password1.value)!="1"){
            error3.innerHTML="Invalid password format";
            error3.style.color="red";
            password1.style.borderColor ="red";
            status_check=1;  
    }
     if(password1.value!=password2.value){
       error4.innerHTML=" password is not matching";
        error4.style.color="red";
        password2.style.borderColor ="red";
        status_check=1;
    }
    
    if(status_check == 1){
        return false;
        
    }
    if (status_check == 0){
    return true;
}

};

function checkpassword(){

    var password1 = document.getElementById("password1");
     
    var lengthy = password1.value.length;

    if(lengthy<8){
    error3.innerHTML = "poor password length";
    error3.style.color = "red";
    }

 else if(lengthy<13 && lengthy>8){
    error3.innerHTML = "Medium password length"
    error3.style.color = "orange";
     
 }
 else{
    error3.innerHTML = "Strong password length";
     error3.style.color = "green";

 }
 
 
};