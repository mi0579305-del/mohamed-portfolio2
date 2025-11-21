let username = document.querySelector("username")
let password = document.querySelector("password")
let loginbtn = document.querySelector("sign_in")
let getuser = localStorage.getItem("username")

let getpassword = localStorage.getItem("password")


loginbtn.addEventListener('click',function(e){
    e.preventDefault()
if(username.value === "" || email.value ===""|| password.value ==="" ){

    alert ("please fild data ")

}
else{
localStorage.getItem('username',username.value)

localStorage.getItem('email',email.value)

localStorage.getItem('password',password.value)


}


})
