var signName = document.getElementById('nameSign')
var signEmail = document.getElementById('emailSign')
var signPass = document.getElementById('PassSign')
var signIn =  document.getElementById('signIn')
var emaillog=  document.getElementById("email")
var passwordlog   = document.getElementById("Password")
var logOut=document.getElementById("logOut")
var userList =  [] ;
var signUp=document.getElementById('signUp');
var userNameLogin=[]

if(localStorage.getItem('user')!=null)
{
    userList= JSON.parse(localStorage.getItem("user")) 
}


signUp?.addEventListener("click",function(){
    var useUser = userList.findIndex((el) => {

     return el.userName == signName.value&& el.userEmail == signEmail.value
    })
    if(validation()==true){
        if(useUser == -1){
        var user = {
                           userName : signName.value ,
                           userEmail : signEmail.value   , 
                           userPass : signPass.value 
                    
                        }
                        userList.push(user);
                       
                       localStorage.setItem("user",JSON.stringify(userList))
                    
                       document.querySelector('#alertsuccess').classList.replace('d-none', 'd-block')
                       document.querySelector('#alertName').classList.replace('d-block', 'd-none')
                    
                       
    }  else{
        
        document.querySelector('#alertName').classList.replace('d-none', 'd-block')
    document.querySelector('#alertsuccess').classList.replace('d-block', 'd-none')
    }
    document.querySelector('#alerteamail').classList.replace('d-block', 'd-none')
    }
    else{
        document.querySelector('#alerteamail').classList.replace('d-none', 'd-block')
    }
    
    
})



 
signIn?.addEventListener("click", function(){
    var  currentUser = userList.find((el) => {
        return el.userEmail==emaillog.value  &&  el.userPass == passwordlog.value
    })
    
    
        
     if ( currentUser  == undefined){
       
        
         document.querySelector('#alerrtdanger').classList.replace('d-none', 'd-block')
     } else{
       localStorage.setItem("currnnntuser",currentUser.userName)
    window.location.href ="welcome.html"
     }
    
})

if(localStorage.getItem("currnnntuser")!==null){
     document.getElementById("welcome").innerHTML= 'welcome  '  
    //  + JSON.parse(localStorage.getItem("curruser"))

}





function validation(){
    
var emailvalidation=/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailvalidation.test(signEmail.value)==true){
        return true
    }
    else{
        return false
    }
 }






logOut?.addEventListener("click",()=>{
    window.location.replace("index.html")
})