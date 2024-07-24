let signup = document.getElementById("signup");
let signin = document.getElementById("signin");
let nameField = document.getElementById("name");
let title = document.getElementById("title");



function saveData(){
    let name, email , password;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    
    // localStorage.setItem("name",name);
    // localStorage.setItem("email",email);
    // localStorage.setItem("password",password);

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    
} 
signin.onclick=function(){
    nameField.style.maxHeight='0';
    title.innerHTML="Sign In";
    signup.classList.add("disable");
    signin.classList.remove("disable");
}
signup.onclick=function(){
    nameField.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signin.classList.add("disable");
    signup.classList.remove("disable");
}

// function saveData(){
//     let name, email , password;
//     name=document.getElementById("nameField").value;
//     email=document.getElementById("email").value;
//     password=document.getElementById("password").value;
//     console.log(name+email+password);
//     alert("login");
// } 