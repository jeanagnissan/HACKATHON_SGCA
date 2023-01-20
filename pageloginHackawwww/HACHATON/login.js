
//Login
let loginsubmit = document.getElementById("loginsubmit-btn")
loginsubmit.addEventListener('click', function(e){
   e.preventDefault()
   //Recuperation des variables
   let loginuseremail = document.getElementById("loginuseremail").value
   let loginuserpassword = document.getElementById("loginuserpassword").value
   console.log(loginuseremail,loginuserpassword);

   // Récupertration des donnés
   let userinfos = JSON.parse(localStorage.getItem("userinfo"))
   //Decoder le password
   let pwd = (userinfos?.password)
   console.log("password",pwd)

   if (loginuseremail === userinfos?.email && loginuserpassword === pwd ){
       //Recuperation du mot de passe dans le dashboard
       window.location = "file:///D:/DevAtos/DI_Bootcamp/Manga%20Projet/PratiqueHtmlCssJs/dashboard.html"
   } else {
       alert("Votre login ou mot de passe est incorrect")
   }
   // coulibalymouhamed27@gmail.com
   // 12345
   
   form.reset();
//Empêcher l'envoie du formulaire
   return false;

})

