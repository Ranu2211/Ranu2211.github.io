// var sidenav = document.getElementsByClassName("sidenav")[0];
// var leftnav = document.getElementsByClassName("leftnav")[0]
var rightbtn = document.getElementById("rightbtn");
var sidenav = document.getElementById("sidenav");
var rightnav = document.getElementById("rightnav");
sidenav.style.right="-168px";
rightbtn.onclick = function(){
       if(sidenav.style.right=="-168px"){
        sidenav.style.right="0px";
       
       }
       else{
           sidenav.style.right="-168px";
         //   <i id="rightnav" class="fa fa-ellipsis-v"></i>;

       }
     
   
    }

