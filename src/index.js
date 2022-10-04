 import { home } from "./home";
 import { menu } from "./menu";
 import { about } from "./about";
 import { navbar } from "./header";
 import './style.css';

 const init = (function(){
    const contentDiv = document.querySelector("#content");
     
    const content = index(home(),0);
   
    contentDiv.appendChild(content);

    const homeTab = document.querySelector(".homeMenu");
    homeTab.addEventListener("click",() => index(home(),1));

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", () => index(menu(),1));

    const aboutTab = document.querySelector(".about");
    aboutTab.addEventListener("click",() => index(about(),1));
    
 })();


function index (homeLeftContent, checkInit){ 
    
    const homeDiv = document.createElement('div')
    const homeRightDiv = document.createElement('div')
    homeDiv.classList.add('home');    
    homeRightDiv.classList.add('homeRight');
    console.log(homeLeftContent);
    homeDiv.appendChild(navbar());
    homeDiv.appendChild(homeRightDiv);
    if (checkInit == 1) {       
        const left = document.querySelector(".homeLeft")
        const parentDiv = left.parentNode;   
             
        parentDiv.replaceChild( homeLeftContent, left); 
    } else {
        homeDiv.appendChild(homeLeftContent);
    }    
   
    return homeDiv;

}
 


 