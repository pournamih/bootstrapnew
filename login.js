

function validate(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var emailerror = document.getElementById("emailerror");
    var pwderror = document.getElementById("pwderror");

    var regemail=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    var regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

    emailerror.innerHTML="";
    emailerror.style.color="white";
    // email.style.borderColor="green";
    pwderror.innerHTML="";
    pwderror.style.color="white";
    // password.style.borderColor="green";
     
    var status_check = 0;
    if(regemail.test(email.value)!="1"){
        emailerror.innerHTML = " enter valid email format";
        emailerror.style.color = "red";
        status_check = 1;
    }
        

        if(regpwd.test(password.value)!="1"){
            pwderror.innerHTML = "enter correct password ";
            pwderror.style.color="red";
            status_check =1;
        }
     if(status_check ==1)
     {
         return false;
     }   
     if (status_check ==0 )
     {
         return true;
     }
    
    
};