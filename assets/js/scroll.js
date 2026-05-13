window.addEventListener("scroll",()=>{

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#07111fe8";
    }else{
        navbar.style.background = "rgba(0,0,0,.3)";
    }

});